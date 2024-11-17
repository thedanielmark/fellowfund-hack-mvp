import { BigInt } from "@graphprotocol/graph-ts";
import {
  ApplicantAccepted as ApplicantAcceptedEvent,
  ApplicationEvaluated as ApplicationEvaluatedEvent,
  ApplicationSubmitted as ApplicationSubmittedEvent,
  EpochResolved as EpochResolvedEvent,
  EpochStarted as EpochStartedEvent,
  FellowshipCreated as FellowshipCreatedEvent,
  FellowshipResolved as FellowshipResolvedEvent,
  MarketOpened as MarketOpenedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/fello-fund-unichain/fello_fund_unichain";
import { Fellowship, Applicant } from "../generated/schema";

export function handleApplicantAccepted(event: ApplicantAcceptedEvent): void {
  let entity = Applicant.load(
    event.params.fellowshipId.toString() +
      "x" +
      event.params.applicationId.toString()
  );
  if (!entity) {
    return;
  }
  entity.accepted = true;
  entity.save();
}

export function handleApplicationEvaluated(
  event: ApplicationEvaluatedEvent
): void {
  let entity = Applicant.load(
    event.params.fellowshipId.toString() +
      "x" +
      event.params.applicationId.toString()
  );
  if (!entity) {
    return;
  }

  entity.achieved = true;

  entity.save();
}

export function handleApplicationSubmitted(
  event: ApplicationSubmittedEvent
): void {
  let applicant = new Applicant(
    event.params.fellowshipId.toString() +
      "x" +
      event.params.applicationId.toString()
  );
  let fellowship = Fellowship.load(event.params.fellowshipId.toString());

  if (!fellowship) {
    // If fellowship doesn't exist, handle gracefully.
    return;
  }

  fellowship.totalApplications = fellowship.totalApplications.plus(
    BigInt.fromI32(1)
  );

  applicant.fellowship = fellowship.id;
  applicant.applicationId = event.params.applicationId;
  applicant.applicantAddress = event.params.applicant;
  applicant.metadata = event.params.metadata; // Placeholder; add actual metadata if available.
  applicant.achieved = false;
  applicant.verified = false;
  applicant.accepted = false;
  applicant.grantAmount = BigInt.fromI32(0);
  applicant.blockNumber = event.block.number;
  applicant.blockTimestamp = event.block.timestamp;
  applicant.transactionHash = event.transaction.hash;
  applicant.save();

  fellowship.save();
}

export function handleEpochResolved(event: EpochResolvedEvent): void {
  let entity = Fellowship.load(event.params.fellowshipId.toString());
  if (!entity) {
    return;
  }

  entity.resolved = true;

  entity.save();
}

export function handleEpochStarted(event: EpochStartedEvent): void {
  let entity = Fellowship.load(event.params.fellowshipId.toString());
  if (!entity) {
    return;
  }
  entity.epochStarted = true;
  entity.status = 3;
  entity.grantPerAccepted = event.params.grantPerAccepted;
  entity.totalApplications = event.params.totalApplications;
  entity.save();
}

export function handleFellowshipCreated(event: FellowshipCreatedEvent): void {
  let fellowship = new Fellowship(event.params.fellowshipId.toString());
  fellowship.fellowshipId = event.params.fellowshipId;
  fellowship.metadata = event.params.fellowship.metadata;
  fellowship.funds = event.params.fellowship.funds;
  fellowship.applicationDeadline = event.params.fellowship.applicationDeadline;
  fellowship.marketDeadline = event.params.fellowship.marketDeadline;
  fellowship.epochEndTime = event.params.fellowship.epochEndTime;
  fellowship.status = event.params.fellowship.status;
  fellowship.resolved = false;
  fellowship.epochStarted = false;
  fellowship.grantPerAccepted = BigInt.fromI32(0);
  fellowship.acceptedApplicants = BigInt.fromI32(0);
  fellowship.totalApplications = BigInt.fromI32(0);
  fellowship.blockNumber = event.block.number;
  fellowship.blockTimestamp = event.block.timestamp;
  fellowship.transactionHash = event.transaction.hash;
  fellowship.save();
}

export function handleFellowshipResolved(event: FellowshipResolvedEvent): void {
  let entity = Fellowship.load(event.params.fellowshipId.toString());
  if (!entity) {
    return;
  }
  entity.resolved = true;
  let fellowship = Fellowship.load(event.params.fellowshipId.toString());
  if (!fellowship) {
    return;
  }
  fellowship.status = 4;

  entity.save();
}

export function handleMarketOpened(event: MarketOpenedEvent): void {
  let entity = Applicant.load(
    event.params.fellowshipId.toString() +
      "x" +
      event.params.applicationId.toString()
  );
  if (!entity) {
    return;
  }
  entity.marketAddress = event.params.marketAddress;
  let fellowship = Fellowship.load(event.params.fellowshipId.toString());
  if (!fellowship) {
    return;
  }
  fellowship.status = 2;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  // let entity = Fellowship.load(event.params..toString());
}
