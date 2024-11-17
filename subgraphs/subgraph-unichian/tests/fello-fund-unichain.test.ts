import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ApplicantAccepted } from "../generated/schema"
import { ApplicantAccepted as ApplicantAcceptedEvent } from "../generated/fello-fund-unichain/fello-fund-unichain"
import { handleApplicantAccepted } from "../src/fello-fund-unichain"
import { createApplicantAcceptedEvent } from "./fello-fund-unichain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fellowshipId = BigInt.fromI32(234)
    let applicationId = BigInt.fromI32(234)
    let newApplicantAcceptedEvent = createApplicantAcceptedEvent(
      fellowshipId,
      applicationId
    )
    handleApplicantAccepted(newApplicantAcceptedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApplicantAccepted created and stored", () => {
    assert.entityCount("ApplicantAccepted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApplicantAccepted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fellowshipId",
      "234"
    )
    assert.fieldEquals(
      "ApplicantAccepted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "applicationId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
