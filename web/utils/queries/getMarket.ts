function getMarket(applicantId: any) {
  return `
        query MyQuery {
  applicant(id: "${applicantId}") {
    marketAddress
    metadata
    verified
    grantAmount
    applicantAddress
  }
}
    `;
}

export default getMarket;
