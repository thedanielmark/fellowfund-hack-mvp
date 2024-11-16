import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ApplicationEvaluated } from "../generated/schema"
import { ApplicationEvaluated as ApplicationEvaluatedEvent } from "../generated/FelloFund/FelloFund"
import { handleApplicationEvaluated } from "../src/fello-fund"
import { createApplicationEvaluatedEvent } from "./fello-fund-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fellowshipId = BigInt.fromI32(234)
    let applicationId = BigInt.fromI32(234)
    let achieved = "boolean Not implemented"
    let newApplicationEvaluatedEvent = createApplicationEvaluatedEvent(
      fellowshipId,
      applicationId,
      achieved
    )
    handleApplicationEvaluated(newApplicationEvaluatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApplicationEvaluated created and stored", () => {
    assert.entityCount("ApplicationEvaluated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApplicationEvaluated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fellowshipId",
      "234"
    )
    assert.fieldEquals(
      "ApplicationEvaluated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "applicationId",
      "234"
    )
    assert.fieldEquals(
      "ApplicationEvaluated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "achieved",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
