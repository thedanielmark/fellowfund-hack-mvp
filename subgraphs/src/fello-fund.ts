import {
  ApplicationEvaluated as ApplicationEvaluatedEvent,
  ApplicationSubmitted as ApplicationSubmittedEvent,
  EpochResolved as EpochResolvedEvent,
  EpochStarted as EpochStartedEvent,
  FellowshipCreated as FellowshipCreatedEvent,
  FellowshipResolved as FellowshipResolvedEvent,
  MarketOpened as MarketOpenedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/FelloFund/FelloFund"
import {
  ApplicationEvaluated,
  ApplicationSubmitted,
  EpochResolved,
  EpochStarted,
  FellowshipCreated,
  FellowshipResolved,
  MarketOpened,
  OwnershipTransferred
} from "../generated/schema"

export function handleApplicationEvaluated(
  event: ApplicationEvaluatedEvent
): void {
  let entity = new ApplicationEvaluated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId
  entity.applicationId = event.params.applicationId
  entity.achieved = event.params.achieved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationSubmitted(
  event: ApplicationSubmittedEvent
): void {
  let entity = new ApplicationSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId
  entity.applicationId = event.params.applicationId
  entity.applicant = event.params.applicant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEpochResolved(event: EpochResolvedEvent): void {
  let entity = new EpochResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEpochStarted(event: EpochStartedEvent): void {
  let entity = new EpochStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId
  entity.grantPerAccepted = event.params.grantPerAccepted
  entity.acceptedCount = event.params.acceptedCount
  entity.totalApplications = event.params.totalApplications

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFellowshipCreated(event: FellowshipCreatedEvent): void {
  let entity = new FellowshipCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId
  entity.fellowship_metadata = event.params.fellowship.metadata
  entity.fellowship_funds = event.params.fellowship.funds
  entity.fellowship_applicationDeadline =
    event.params.fellowship.applicationDeadline
  entity.fellowship_marketDeadline = event.params.fellowship.marketDeadline
  entity.fellowship_epochEndTime = event.params.fellowship.epochEndTime
  entity.fellowship_status = event.params.fellowship.status
  entity.fellowship_maxApplicants = event.params.fellowship.maxApplicants

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFellowshipResolved(event: FellowshipResolvedEvent): void {
  let entity = new FellowshipResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketOpened(event: MarketOpenedEvent): void {
  let entity = new MarketOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fellowshipId = event.params.fellowshipId
  entity.marketAddress = event.params.marketAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
