function getMarkets(marketId: any) {
  return `
        query MyQuery {
  fellowships(where: {id: ${marketId}}) {
    id
    applicants {
      id
      applicationId
      marketAddress
      metadata
      grantAmount
    }
  }
}
    `;
}

export default getMarkets;
