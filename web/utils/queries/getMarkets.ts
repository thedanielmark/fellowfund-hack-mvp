function getMarkets() {
  return `
      query MyQuery {
        fellowships {
            id
            epochEndTime
            applicationDeadline
            metadata
            funds
        }
      }
  `;
}

export default getMarkets;
