// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./Types.sol";
import {IMarket} from "./interfaces/IMarket.sol";

contract Market is IMarket {
    address public immutable operator;

    // State variables
    address public immutable applicant;
    uint256 public immutable fellowshipId;
    Side public result;
    bool public isMarketResolved;
    mapping(Side => uint256) public bets;
    mapping(address => mapping(Side => uint256)) public betsPerBettor;
    address[] public bettors;
    mapping(address => bool) private isBettor;

    // Events
    event BetPlaced(address indexed bettor, Side indexed side, uint256 amount);
    event MarketResolved(Side indexed winner);
    event WinningsDistributed(address indexed bettor, uint256 amount);

    // Custom errors
    error MarkedAlreadyResolved();
    error InvalidBetAmount();
    error TransferFailed();
    error NoBetsPlaced();

    constructor(address _operator, uint256 _fellowshipId, address _applicant) {
        operator = _operator;
        fellowshipId = _fellowshipId;
        applicant = _applicant;
    }

    modifier onlyOperator() {
        require(msg.sender == operator, "Only the operator can call this function");
        _;
    }

    function getBet(Side _side) external view returns (uint256) {
        return bets[_side];
    }

    function placeBet(Side _side) external payable {
        if (isMarketResolved) revert MarkedAlreadyResolved();
        if (msg.value == 0) revert InvalidBetAmount();

        bets[_side] += msg.value;
        betsPerBettor[msg.sender][_side] += msg.value;

        if (!isBettor[msg.sender]) {
            bettors.push(msg.sender);
            isBettor[msg.sender] = true;
        }

        emit BetPlaced(msg.sender, _side, msg.value);
    }

    function resolve(Side _winner) external onlyOperator {
        if (isMarketResolved) revert MarkedAlreadyResolved();
        if (bettors.length == 0) revert NoBetsPlaced();

        result = _winner;
        isMarketResolved = true;

        uint256 totalWinningBets = bets[_winner];
        // Todo: Decide what to do with the funds if no one wins, i.e., totalWinningBets == 0.
        if (totalWinningBets > 0) {
            uint256 totalPot = address(this).balance;
            uint256 nrBettors = bettors.length;
            for (uint256 i = 0; i < nrBettors; i++) {
                address bettor = bettors[i];
                uint256 winningBets = betsPerBettor[bettor][_winner];

                if (winningBets > 0) {
                    uint256 winnings = (winningBets * totalPot) / totalWinningBets;
                    // Reset winner's bets before transfer
                    betsPerBettor[bettor][Side.Yes] = 0;
                    betsPerBettor[bettor][Side.No] = 0;

                    (bool success,) = payable(bettor).call{value: winnings}("");
                    // Todo: This should not revert. If one bettor uses a contract as bettor that rejects payment resolve is blocked for everyone!
                    if (!success) revert TransferFailed();

                    emit WinningsDistributed(bettor, winnings);
                } else {
                    // Reset looser's bets
                    betsPerBettor[bettor][Side.Yes] = 0;
                    betsPerBettor[bettor][Side.No] = 0;
                }
            }
        }
        emit MarketResolved(_winner);
    }
}
