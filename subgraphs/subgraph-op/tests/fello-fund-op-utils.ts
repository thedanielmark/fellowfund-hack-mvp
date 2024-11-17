import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ApplicantAccepted,
  ApplicationEvaluated,
  ApplicationSubmitted,
  EpochResolved,
  EpochStarted,
  FellowshipCreated,
  FellowshipResolved,
  MarketOpened,
  OwnershipTransferred
} from "../generated/fello-fund-op/fello-fund-op"

export function createApplicantAcceptedEvent(
  fellowshipId: BigInt,
  applicationId: BigInt
): ApplicantAccepted {
  let applicantAcceptedEvent = changetype<ApplicantAccepted>(newMockEvent())

  applicantAcceptedEvent.parameters = new Array()

  applicantAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  applicantAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "applicationId",
      ethereum.Value.fromUnsignedBigInt(applicationId)
    )
  )

  return applicantAcceptedEvent
}

export function createApplicationEvaluatedEvent(
  fellowshipId: BigInt,
  applicationId: BigInt,
  achieved: boolean
): ApplicationEvaluated {
  let applicationEvaluatedEvent = changetype<ApplicationEvaluated>(
    newMockEvent()
  )

  applicationEvaluatedEvent.parameters = new Array()

  applicationEvaluatedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  applicationEvaluatedEvent.parameters.push(
    new ethereum.EventParam(
      "applicationId",
      ethereum.Value.fromUnsignedBigInt(applicationId)
    )
  )
  applicationEvaluatedEvent.parameters.push(
    new ethereum.EventParam("achieved", ethereum.Value.fromBoolean(achieved))
  )

  return applicationEvaluatedEvent
}

export function createApplicationSubmittedEvent(
  fellowshipId: BigInt,
  applicationId: BigInt,
  applicant: Address,
  metadata: string
): ApplicationSubmitted {
  let applicationSubmittedEvent = changetype<ApplicationSubmitted>(
    newMockEvent()
  )

  applicationSubmittedEvent.parameters = new Array()

  applicationSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  applicationSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "applicationId",
      ethereum.Value.fromUnsignedBigInt(applicationId)
    )
  )
  applicationSubmittedEvent.parameters.push(
    new ethereum.EventParam("applicant", ethereum.Value.fromAddress(applicant))
  )
  applicationSubmittedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return applicationSubmittedEvent
}

export function createEpochResolvedEvent(fellowshipId: BigInt): EpochResolved {
  let epochResolvedEvent = changetype<EpochResolved>(newMockEvent())

  epochResolvedEvent.parameters = new Array()

  epochResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )

  return epochResolvedEvent
}

export function createEpochStartedEvent(
  fellowshipId: BigInt,
  grantPerAccepted: BigInt,
  acceptedCount: BigInt,
  totalApplications: BigInt
): EpochStarted {
  let epochStartedEvent = changetype<EpochStarted>(newMockEvent())

  epochStartedEvent.parameters = new Array()

  epochStartedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  epochStartedEvent.parameters.push(
    new ethereum.EventParam(
      "grantPerAccepted",
      ethereum.Value.fromUnsignedBigInt(grantPerAccepted)
    )
  )
  epochStartedEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedCount",
      ethereum.Value.fromUnsignedBigInt(acceptedCount)
    )
  )
  epochStartedEvent.parameters.push(
    new ethereum.EventParam(
      "totalApplications",
      ethereum.Value.fromUnsignedBigInt(totalApplications)
    )
  )

  return epochStartedEvent
}

export function createFellowshipCreatedEvent(
  fellowshipId: BigInt,
  fellowship: ethereum.Tuple
): FellowshipCreated {
  let fellowshipCreatedEvent = changetype<FellowshipCreated>(newMockEvent())

  fellowshipCreatedEvent.parameters = new Array()

  fellowshipCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  fellowshipCreatedEvent.parameters.push(
    new ethereum.EventParam("fellowship", ethereum.Value.fromTuple(fellowship))
  )

  return fellowshipCreatedEvent
}

export function createFellowshipResolvedEvent(
  fellowshipId: BigInt
): FellowshipResolved {
  let fellowshipResolvedEvent = changetype<FellowshipResolved>(newMockEvent())

  fellowshipResolvedEvent.parameters = new Array()

  fellowshipResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )

  return fellowshipResolvedEvent
}

export function createMarketOpenedEvent(
  fellowshipId: BigInt,
  marketAddress: Address,
  applicationId: BigInt
): MarketOpened {
  let marketOpenedEvent = changetype<MarketOpened>(newMockEvent())

  marketOpenedEvent.parameters = new Array()

  marketOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowshipId",
      ethereum.Value.fromUnsignedBigInt(fellowshipId)
    )
  )
  marketOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "marketAddress",
      ethereum.Value.fromAddress(marketAddress)
    )
  )
  marketOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "applicationId",
      ethereum.Value.fromUnsignedBigInt(applicationId)
    )
  )

  return marketOpenedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
