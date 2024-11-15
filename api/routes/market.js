var express = require("express");
var router = express.Router();

/* GET market page. */
router.get("/yes", function (req, res, next) {
  res.json({
    success: true,
    total: 478,
    data: [
      {
        _id: "2021-08-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 1,
      },
      {
        _id: "2021-08-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 2,
      },
      {
        _id: "2021-09-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 3,
      },
      {
        _id: "2021-09-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 4,
      },
      {
        _id: "2021-09-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 5,
      },
      {
        _id: "2021-09-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 6,
      },
      {
        _id: "2021-09-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 7,
      },
      {
        _id: "2021-09-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 8,
      },
      {
        _id: "2021-09-29T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 9,
      },
      {
        _id: "2021-10-07T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 10,
      },
      {
        _id: "2021-10-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 11,
      },
      {
        _id: "2021-10-19T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 13,
      },
      {
        _id: "2021-10-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 14,
      },
      {
        _id: "2021-11-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 15,
      },
      {
        _id: "2021-11-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 16,
      },
      {
        _id: "2021-11-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 17,
      },
      {
        _id: "2021-11-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 18,
      },
      {
        _id: "2021-11-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 19,
      },
      {
        _id: "2021-11-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 20,
      },
      {
        _id: "2021-11-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 21,
      },
      {
        _id: "2021-11-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 22,
      },
      {
        _id: "2021-11-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 23,
      },
      {
        _id: "2021-12-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 24,
      },
      {
        _id: "2021-12-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 25,
      },
      {
        _id: "2021-12-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 26,
      },
      {
        _id: "2021-12-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 27,
      },
      {
        _id: "2021-12-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 28,
      },
      {
        _id: "2021-12-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 29,
      },
      {
        _id: "2021-12-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 30,
      },
      {
        _id: "2022-01-05T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 32,
      },
      {
        _id: "2022-01-11T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 34,
      },
      {
        _id: "2022-01-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 35,
      },
      {
        _id: "2022-01-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 36,
      },
      {
        _id: "2022-02-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 37,
      },
      {
        _id: "2022-02-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 38,
      },
      {
        _id: "2022-02-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 39,
      },
      {
        _id: "2022-02-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 40,
      },
      {
        _id: "2022-03-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 41,
      },
      {
        _id: "2022-03-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 42,
      },
      {
        _id: "2022-03-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 43,
      },
      {
        _id: "2022-03-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 44,
      },
      {
        _id: "2022-03-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 45,
      },
      {
        _id: "2022-03-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 46,
      },
      {
        _id: "2022-03-31T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 48,
      },
      {
        _id: "2022-04-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 49,
      },
      {
        _id: "2022-04-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 50,
      },
      {
        _id: "2022-04-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 52,
      },
      {
        _id: "2022-04-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 53,
      },
      {
        _id: "2022-04-11T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 55,
      },
      {
        _id: "2022-04-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 56,
      },
      {
        _id: "2022-04-14T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 59,
      },
      {
        _id: "2022-04-18T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 62,
      },
      {
        _id: "2022-04-22T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 66,
      },
      {
        _id: "2022-04-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 67,
      },
      {
        _id: "2022-04-24T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 69,
      },
      {
        _id: "2022-04-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 70,
      },
      {
        _id: "2022-05-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 71,
      },
      {
        _id: "2022-05-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 72,
      },
      {
        _id: "2022-05-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 73,
      },
      {
        _id: "2022-05-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 74,
      },
      {
        _id: "2022-05-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 75,
      },
      {
        _id: "2022-05-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 76,
      },
      {
        _id: "2022-05-17T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 78,
      },
      {
        _id: "2022-05-18T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 81,
      },
      {
        _id: "2022-05-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 82,
      },
      {
        _id: "2022-05-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 83,
      },
      {
        _id: "2022-05-26T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 85,
      },
      {
        _id: "2022-05-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 86,
      },
      {
        _id: "2022-05-29T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 87,
      },
      {
        _id: "2022-06-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 88,
      },
      {
        _id: "2022-06-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 89,
      },
      {
        _id: "2022-06-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 90,
      },
      {
        _id: "2022-06-07T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 92,
      },
      {
        _id: "2022-06-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 93,
      },
      {
        _id: "2022-06-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 94,
      },
      {
        _id: "2022-06-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 95,
      },
      {
        _id: "2022-06-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 96,
      },
      {
        _id: "2022-06-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 97,
      },
      {
        _id: "2022-06-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 98,
      },
      {
        _id: "2022-06-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 99,
      },
      {
        _id: "2022-06-26T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 101,
      },
      {
        _id: "2022-06-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 102,
      },
      {
        _id: "2022-07-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 103,
      },
      {
        _id: "2022-07-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 104,
      },
      {
        _id: "2022-07-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 105,
      },
      {
        _id: "2022-07-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 106,
      },
      {
        _id: "2022-07-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 107,
      },
      {
        _id: "2022-07-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 108,
      },
      {
        _id: "2022-07-11T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 110,
      },
      {
        _id: "2022-07-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 111,
      },
      {
        _id: "2022-07-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 112,
      },
      {
        _id: "2022-07-15T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 114,
      },
      {
        _id: "2022-07-18T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 115,
      },
      {
        _id: "2022-07-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 116,
      },
      {
        _id: "2022-07-26T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 118,
      },
      {
        _id: "2022-07-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 119,
      },
      {
        _id: "2022-07-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 120,
      },
      {
        _id: "2022-07-29T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 124,
      },
      {
        _id: "2022-08-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 125,
      },
      {
        _id: "2022-08-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 126,
      },
      {
        _id: "2022-08-09T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 128,
      },
      {
        _id: "2022-08-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 129,
      },
      {
        _id: "2022-08-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 130,
      },
      {
        _id: "2022-08-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 131,
      },
      {
        _id: "2022-08-18T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 132,
      },
      {
        _id: "2022-08-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 133,
      },
      {
        _id: "2022-08-31T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 134,
      },
      {
        _id: "2022-09-01T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 136,
      },
      {
        _id: "2022-09-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 137,
      },
      {
        _id: "2022-09-07T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 138,
      },
      {
        _id: "2022-09-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 139,
      },
      {
        _id: "2022-09-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 140,
      },
      {
        _id: "2022-09-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 141,
      },
      {
        _id: "2022-09-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 142,
      },
      {
        _id: "2022-09-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 143,
      },
      {
        _id: "2022-09-27T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 145,
      },
      {
        _id: "2022-09-28T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 147,
      },
      {
        _id: "2022-10-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 148,
      },
      {
        _id: "2022-10-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 149,
      },
      {
        _id: "2022-10-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 150,
      },
      {
        _id: "2022-10-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 151,
      },
      {
        _id: "2022-10-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 152,
      },
      {
        _id: "2022-10-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 153,
      },
      {
        _id: "2022-10-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 154,
      },
      {
        _id: "2022-10-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 155,
      },
      {
        _id: "2022-10-18T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 157,
      },
      {
        _id: "2022-10-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 158,
      },
      {
        _id: "2022-10-20T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 161,
      },
      {
        _id: "2022-10-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 162,
      },
      {
        _id: "2022-10-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 163,
      },
      {
        _id: "2022-10-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 164,
      },
      {
        _id: "2022-10-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 165,
      },
      {
        _id: "2022-10-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 166,
      },
      {
        _id: "2022-11-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 167,
      },
      {
        _id: "2022-11-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 168,
      },
      {
        _id: "2022-11-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 169,
      },
      {
        _id: "2022-11-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 170,
      },
      {
        _id: "2022-11-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 171,
      },
      {
        _id: "2022-11-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 172,
      },
      {
        _id: "2022-11-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 173,
      },
      {
        _id: "2022-11-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 174,
      },
      {
        _id: "2022-11-24T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 176,
      },
      {
        _id: "2022-11-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 177,
      },
      {
        _id: "2022-12-02T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 179,
      },
      {
        _id: "2022-12-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 180,
      },
      {
        _id: "2022-12-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 181,
      },
      {
        _id: "2022-12-07T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 183,
      },
      {
        _id: "2022-12-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 185,
      },
      {
        _id: "2022-12-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 186,
      },
      {
        _id: "2022-12-13T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 188,
      },
      {
        _id: "2022-12-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 189,
      },
      {
        _id: "2022-12-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 190,
      },
      {
        _id: "2022-12-16T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 193,
      },
      {
        _id: "2022-12-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 194,
      },
      {
        _id: "2022-12-20T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 196,
      },
      {
        _id: "2022-12-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 197,
      },
      {
        _id: "2022-12-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 198,
      },
      {
        _id: "2022-12-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 199,
      },
      {
        _id: "2023-01-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 200,
      },
      {
        _id: "2023-01-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 201,
      },
      {
        _id: "2023-01-09T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 204,
      },
      {
        _id: "2023-01-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 205,
      },
      {
        _id: "2023-01-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 206,
      },
      {
        _id: "2023-01-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 207,
      },
      {
        _id: "2023-01-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 208,
      },
      {
        _id: "2023-01-15T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 210,
      },
      {
        _id: "2023-01-17T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 212,
      },
      {
        _id: "2023-01-18T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 213,
      },
      {
        _id: "2023-01-19T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 216,
      },
      {
        _id: "2023-01-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 217,
      },
      {
        _id: "2023-01-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 218,
      },
      {
        _id: "2023-01-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 219,
      },
      {
        _id: "2023-01-31T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 222,
      },
      {
        _id: "2023-02-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 223,
      },
      {
        _id: "2023-02-02T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 227,
      },
      {
        _id: "2023-02-05T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 229,
      },
      {
        _id: "2023-02-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 230,
      },
      {
        _id: "2023-02-07T00:00:00.000Z",
        proposals: 5,
        proposalsCumulative: 235,
      },
      {
        _id: "2023-02-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 237,
      },
      {
        _id: "2023-02-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 238,
      },
      {
        _id: "2023-02-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 239,
      },
      {
        _id: "2023-02-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 240,
      },
      {
        _id: "2023-02-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 241,
      },
      {
        _id: "2023-02-28T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 244,
      },
      {
        _id: "2023-03-01T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 246,
      },
      {
        _id: "2023-03-08T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 249,
      },
      {
        _id: "2023-03-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 250,
      },
      {
        _id: "2023-03-16T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 254,
      },
      {
        _id: "2023-03-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 255,
      },
      {
        _id: "2023-03-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 256,
      },
      {
        _id: "2023-03-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 257,
      },
      {
        _id: "2023-03-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 258,
      },
      {
        _id: "2023-03-29T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 259,
      },
      {
        _id: "2023-03-30T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 262,
      },
      {
        _id: "2023-04-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 263,
      },
      {
        _id: "2023-04-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 264,
      },
      {
        _id: "2023-04-07T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 265,
      },
      {
        _id: "2023-04-10T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 267,
      },
      {
        _id: "2023-04-11T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 268,
      },
      {
        _id: "2023-04-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 269,
      },
      {
        _id: "2023-04-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 270,
      },
      {
        _id: "2023-04-24T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 272,
      },
      {
        _id: "2023-04-25T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 274,
      },
      {
        _id: "2023-04-26T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 277,
      },
      {
        _id: "2023-04-27T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 278,
      },
      {
        _id: "2023-04-28T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 280,
      },
      {
        _id: "2023-04-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 281,
      },
      {
        _id: "2023-05-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 282,
      },
      {
        _id: "2023-05-02T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 284,
      },
      {
        _id: "2023-05-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 285,
      },
      {
        _id: "2023-05-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 287,
      },
      {
        _id: "2023-05-09T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 289,
      },
      {
        _id: "2023-05-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 290,
      },
      {
        _id: "2023-05-11T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 293,
      },
      {
        _id: "2023-05-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 294,
      },
      {
        _id: "2023-05-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 295,
      },
      {
        _id: "2023-05-20T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 297,
      },
      {
        _id: "2023-05-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 298,
      },
      {
        _id: "2023-05-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 299,
      },
      {
        _id: "2023-05-29T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 300,
      },
      {
        _id: "2023-05-31T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 301,
      },
      {
        _id: "2023-06-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 302,
      },
      {
        _id: "2023-06-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 303,
      },
      {
        _id: "2023-06-06T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 306,
      },
      {
        _id: "2023-06-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 307,
      },
      {
        _id: "2023-06-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 308,
      },
      {
        _id: "2023-06-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 309,
      },
      {
        _id: "2023-06-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 310,
      },
      {
        _id: "2023-06-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 311,
      },
      {
        _id: "2023-06-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 312,
      },
      {
        _id: "2023-06-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 313,
      },
      {
        _id: "2023-06-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 314,
      },
      {
        _id: "2023-06-21T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 316,
      },
      {
        _id: "2023-06-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 317,
      },
      {
        _id: "2023-06-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 318,
      },
      {
        _id: "2023-06-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 319,
      },
      {
        _id: "2023-06-29T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 320,
      },
      {
        _id: "2023-06-30T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 323,
      },
      {
        _id: "2023-07-02T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 324,
      },
      {
        _id: "2023-07-05T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 326,
      },
      {
        _id: "2023-07-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 328,
      },
      {
        _id: "2023-07-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 329,
      },
      {
        _id: "2023-07-12T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 333,
      },
      {
        _id: "2023-07-13T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 337,
      },
      {
        _id: "2023-07-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 338,
      },
      {
        _id: "2023-07-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 339,
      },
      {
        _id: "2023-07-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 340,
      },
      {
        _id: "2023-07-17T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 342,
      },
      {
        _id: "2023-07-18T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 343,
      },
      {
        _id: "2023-07-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 344,
      },
      {
        _id: "2023-07-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 345,
      },
      {
        _id: "2023-07-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 346,
      },
      {
        _id: "2023-07-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 347,
      },
      {
        _id: "2023-07-27T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 349,
      },
      {
        _id: "2023-07-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 350,
      },
      {
        _id: "2023-08-01T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 352,
      },
      {
        _id: "2023-08-02T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 354,
      },
      {
        _id: "2023-08-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 355,
      },
      {
        _id: "2023-08-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 356,
      },
      {
        _id: "2023-08-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 357,
      },
      {
        _id: "2023-08-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 358,
      },
      {
        _id: "2023-08-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 359,
      },
      {
        _id: "2023-08-27T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 361,
      },
      {
        _id: "2023-08-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 362,
      },
      {
        _id: "2023-09-07T00:00:00.000Z",
        proposals: 5,
        proposalsCumulative: 367,
      },
      {
        _id: "2023-09-08T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 368,
      },
      {
        _id: "2023-09-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 369,
      },
      {
        _id: "2023-09-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 370,
      },
      {
        _id: "2023-09-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 371,
      },
      {
        _id: "2023-09-16T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 373,
      },
      {
        _id: "2023-09-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 374,
      },
      {
        _id: "2023-09-19T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 376,
      },
      {
        _id: "2023-09-20T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 380,
      },
      {
        _id: "2023-09-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 381,
      },
      {
        _id: "2023-09-22T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 384,
      },
      {
        _id: "2023-09-23T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 386,
      },
      {
        _id: "2023-09-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 387,
      },
      {
        _id: "2023-09-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 388,
      },
      {
        _id: "2023-09-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 389,
      },
      {
        _id: "2023-09-30T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 392,
      },
      {
        _id: "2023-10-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 393,
      },
      {
        _id: "2023-10-04T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 394,
      },
      {
        _id: "2023-10-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 395,
      },
      {
        _id: "2023-10-06T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 397,
      },
      {
        _id: "2023-10-07T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 399,
      },
      {
        _id: "2023-10-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 401,
      },
      {
        _id: "2023-10-09T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 404,
      },
      {
        _id: "2023-10-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 405,
      },
      {
        _id: "2023-10-11T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 407,
      },
      {
        _id: "2023-10-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 408,
      },
      {
        _id: "2023-10-13T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 410,
      },
      {
        _id: "2023-10-14T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 412,
      },
      {
        _id: "2023-10-17T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 414,
      },
      {
        _id: "2023-10-18T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 415,
      },
      {
        _id: "2023-10-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 416,
      },
      {
        _id: "2023-10-20T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 418,
      },
      {
        _id: "2023-10-21T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 419,
      },
      {
        _id: "2023-10-23T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 420,
      },
      {
        _id: "2023-10-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 421,
      },
      {
        _id: "2023-10-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 422,
      },
      {
        _id: "2023-10-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 423,
      },
      {
        _id: "2023-10-29T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 425,
      },
      {
        _id: "2023-10-30T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 426,
      },
      {
        _id: "2023-10-31T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 428,
      },
      {
        _id: "2023-11-01T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 429,
      },
      {
        _id: "2023-11-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 430,
      },
      {
        _id: "2023-11-06T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 431,
      },
      {
        _id: "2023-11-07T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 433,
      },
      {
        _id: "2023-11-08T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 435,
      },
      {
        _id: "2023-11-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 436,
      },
      {
        _id: "2023-11-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 437,
      },
      {
        _id: "2023-11-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 438,
      },
      {
        _id: "2023-11-13T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 440,
      },
      {
        _id: "2023-11-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 441,
      },
      {
        _id: "2023-11-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 442,
      },
      {
        _id: "2023-11-20T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 443,
      },
      {
        _id: "2023-11-21T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 445,
      },
      {
        _id: "2023-11-22T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 446,
      },
      {
        _id: "2023-11-25T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 447,
      },
      {
        _id: "2023-11-26T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 448,
      },
      {
        _id: "2023-11-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 449,
      },
      {
        _id: "2023-12-03T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 450,
      },
      {
        _id: "2023-12-04T00:00:00.000Z",
        proposals: 4,
        proposalsCumulative: 454,
      },
      {
        _id: "2023-12-05T00:00:00.000Z",
        proposals: 2,
        proposalsCumulative: 456,
      },
      {
        _id: "2023-12-07T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 459,
      },
      {
        _id: "2023-12-09T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 460,
      },
      {
        _id: "2023-12-10T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 461,
      },
      {
        _id: "2023-12-12T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 462,
      },
      {
        _id: "2023-12-13T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 463,
      },
      {
        _id: "2023-12-14T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 464,
      },
      {
        _id: "2023-12-15T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 465,
      },
      {
        _id: "2023-12-16T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 466,
      },
      {
        _id: "2023-12-17T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 467,
      },
      {
        _id: "2023-12-18T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 470,
      },
      {
        _id: "2023-12-19T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 471,
      },
      {
        _id: "2023-12-21T00:00:00.000Z",
        proposals: 3,
        proposalsCumulative: 474,
      },
      {
        _id: "2023-12-24T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 475,
      },
      {
        _id: "2023-12-28T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 476,
      },
      {
        _id: "2023-12-31T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 477,
      },
      {
        _id: "2024-01-05T00:00:00.000Z",
        proposals: 1,
        proposalsCumulative: 478,
      },
    ],
  });
});

router.get("/no", function (req, res, next) {
  res.json({
    success: true,
    total: 13394,
    data: [
      {
        _id: "2021-08-22T00:00:00.000Z",
        votes: 3,
        votesCumulative: 3,
      },
      {
        _id: "2021-08-23T00:00:00.000Z",
        votes: 2,
        votesCumulative: 5,
      },
      {
        _id: "2021-08-24T00:00:00.000Z",
        votes: 1,
        votesCumulative: 6,
      },
      {
        _id: "2021-08-27T00:00:00.000Z",
        votes: 5,
        votesCumulative: 11,
      },
      {
        _id: "2021-08-28T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13,
      },
      {
        _id: "2021-08-29T00:00:00.000Z",
        votes: 1,
        votesCumulative: 14,
      },
      {
        _id: "2021-08-30T00:00:00.000Z",
        votes: 1,
        votesCumulative: 15,
      },
      {
        _id: "2021-09-03T00:00:00.000Z",
        votes: 2,
        votesCumulative: 17,
      },
      {
        _id: "2021-09-04T00:00:00.000Z",
        votes: 2,
        votesCumulative: 19,
      },
      {
        _id: "2021-09-05T00:00:00.000Z",
        votes: 2,
        votesCumulative: 21,
      },
      {
        _id: "2021-09-06T00:00:00.000Z",
        votes: 6,
        votesCumulative: 27,
      },
      {
        _id: "2021-09-07T00:00:00.000Z",
        votes: 3,
        votesCumulative: 30,
      },
      {
        _id: "2021-09-08T00:00:00.000Z",
        votes: 3,
        votesCumulative: 33,
      },
      {
        _id: "2021-09-16T00:00:00.000Z",
        votes: 3,
        votesCumulative: 36,
      },
      {
        _id: "2021-09-17T00:00:00.000Z",
        votes: 2,
        votesCumulative: 38,
      },
      {
        _id: "2021-09-18T00:00:00.000Z",
        votes: 2,
        votesCumulative: 40,
      },
      {
        _id: "2021-09-19T00:00:00.000Z",
        votes: 2,
        votesCumulative: 42,
      },
      {
        _id: "2021-09-21T00:00:00.000Z",
        votes: 5,
        votesCumulative: 47,
      },
      {
        _id: "2021-09-22T00:00:00.000Z",
        votes: 1,
        votesCumulative: 48,
      },
      {
        _id: "2021-09-23T00:00:00.000Z",
        votes: 1,
        votesCumulative: 49,
      },
      {
        _id: "2021-09-24T00:00:00.000Z",
        votes: 7,
        votesCumulative: 56,
      },
      {
        _id: "2021-09-26T00:00:00.000Z",
        votes: 1,
        votesCumulative: 57,
      },
      {
        _id: "2021-09-27T00:00:00.000Z",
        votes: 1,
        votesCumulative: 58,
      },
      {
        _id: "2021-09-28T00:00:00.000Z",
        votes: 1,
        votesCumulative: 59,
      },
      {
        _id: "2021-09-29T00:00:00.000Z",
        votes: 4,
        votesCumulative: 63,
      },
      {
        _id: "2021-10-01T00:00:00.000Z",
        votes: 2,
        votesCumulative: 65,
      },
      {
        _id: "2021-10-02T00:00:00.000Z",
        votes: 3,
        votesCumulative: 68,
      },
      {
        _id: "2021-10-03T00:00:00.000Z",
        votes: 4,
        votesCumulative: 72,
      },
      {
        _id: "2021-10-04T00:00:00.000Z",
        votes: 5,
        votesCumulative: 77,
      },
      {
        _id: "2021-10-09T00:00:00.000Z",
        votes: 1,
        votesCumulative: 78,
      },
      {
        _id: "2021-10-10T00:00:00.000Z",
        votes: 1,
        votesCumulative: 79,
      },
      {
        _id: "2021-10-11T00:00:00.000Z",
        votes: 6,
        votesCumulative: 85,
      },
      {
        _id: "2021-10-12T00:00:00.000Z",
        votes: 2,
        votesCumulative: 87,
      },
      {
        _id: "2021-10-13T00:00:00.000Z",
        votes: 8,
        votesCumulative: 95,
      },
      {
        _id: "2021-10-21T00:00:00.000Z",
        votes: 2,
        votesCumulative: 97,
      },
      {
        _id: "2021-10-22T00:00:00.000Z",
        votes: 13,
        votesCumulative: 110,
      },
      {
        _id: "2021-10-23T00:00:00.000Z",
        votes: 3,
        votesCumulative: 113,
      },
      {
        _id: "2021-10-24T00:00:00.000Z",
        votes: 2,
        votesCumulative: 115,
      },
      {
        _id: "2021-10-29T00:00:00.000Z",
        votes: 6,
        votesCumulative: 121,
      },
      {
        _id: "2021-10-30T00:00:00.000Z",
        votes: 1,
        votesCumulative: 122,
      },
      {
        _id: "2021-10-31T00:00:00.000Z",
        votes: 5,
        votesCumulative: 127,
      },
      {
        _id: "2021-11-01T00:00:00.000Z",
        votes: 1,
        votesCumulative: 128,
      },
      {
        _id: "2021-11-07T00:00:00.000Z",
        votes: 1,
        votesCumulative: 129,
      },
      {
        _id: "2021-11-08T00:00:00.000Z",
        votes: 13,
        votesCumulative: 142,
      },
      {
        _id: "2021-11-09T00:00:00.000Z",
        votes: 8,
        votesCumulative: 150,
      },
      {
        _id: "2021-11-10T00:00:00.000Z",
        votes: 5,
        votesCumulative: 155,
      },
      {
        _id: "2021-11-18T00:00:00.000Z",
        votes: 25,
        votesCumulative: 180,
      },
      {
        _id: "2021-11-19T00:00:00.000Z",
        votes: 7,
        votesCumulative: 187,
      },
      {
        _id: "2021-11-20T00:00:00.000Z",
        votes: 4,
        votesCumulative: 191,
      },
      {
        _id: "2021-11-21T00:00:00.000Z",
        votes: 6,
        votesCumulative: 197,
      },
      {
        _id: "2021-11-23T00:00:00.000Z",
        votes: 1,
        votesCumulative: 198,
      },
      {
        _id: "2021-11-24T00:00:00.000Z",
        votes: 6,
        votesCumulative: 204,
      },
      {
        _id: "2021-11-25T00:00:00.000Z",
        votes: 4,
        votesCumulative: 208,
      },
      {
        _id: "2021-11-26T00:00:00.000Z",
        votes: 12,
        votesCumulative: 220,
      },
      {
        _id: "2021-11-27T00:00:00.000Z",
        votes: 18,
        votesCumulative: 238,
      },
      {
        _id: "2021-11-28T00:00:00.000Z",
        votes: 5,
        votesCumulative: 243,
      },
      {
        _id: "2021-11-29T00:00:00.000Z",
        votes: 9,
        votesCumulative: 252,
      },
      {
        _id: "2021-11-30T00:00:00.000Z",
        votes: 5,
        votesCumulative: 257,
      },
      {
        _id: "2021-12-02T00:00:00.000Z",
        votes: 3,
        votesCumulative: 260,
      },
      {
        _id: "2021-12-03T00:00:00.000Z",
        votes: 4,
        votesCumulative: 264,
      },
      {
        _id: "2021-12-04T00:00:00.000Z",
        votes: 6,
        votesCumulative: 270,
      },
      {
        _id: "2021-12-05T00:00:00.000Z",
        votes: 9,
        votesCumulative: 279,
      },
      {
        _id: "2021-12-06T00:00:00.000Z",
        votes: 14,
        votesCumulative: 293,
      },
      {
        _id: "2021-12-07T00:00:00.000Z",
        votes: 3,
        votesCumulative: 296,
      },
      {
        _id: "2021-12-08T00:00:00.000Z",
        votes: 8,
        votesCumulative: 304,
      },
      {
        _id: "2021-12-09T00:00:00.000Z",
        votes: 4,
        votesCumulative: 308,
      },
      {
        _id: "2021-12-10T00:00:00.000Z",
        votes: 2,
        votesCumulative: 310,
      },
      {
        _id: "2021-12-15T00:00:00.000Z",
        votes: 6,
        votesCumulative: 316,
      },
      {
        _id: "2021-12-16T00:00:00.000Z",
        votes: 1,
        votesCumulative: 317,
      },
      {
        _id: "2021-12-17T00:00:00.000Z",
        votes: 4,
        votesCumulative: 321,
      },
      {
        _id: "2021-12-27T00:00:00.000Z",
        votes: 8,
        votesCumulative: 329,
      },
      {
        _id: "2021-12-28T00:00:00.000Z",
        votes: 4,
        votesCumulative: 333,
      },
      {
        _id: "2021-12-29T00:00:00.000Z",
        votes: 3,
        votesCumulative: 336,
      },
      {
        _id: "2021-12-30T00:00:00.000Z",
        votes: 10,
        votesCumulative: 346,
      },
      {
        _id: "2021-12-31T00:00:00.000Z",
        votes: 3,
        votesCumulative: 349,
      },
      {
        _id: "2022-01-01T00:00:00.000Z",
        votes: 2,
        votesCumulative: 351,
      },
      {
        _id: "2022-01-07T00:00:00.000Z",
        votes: 2,
        votesCumulative: 353,
      },
      {
        _id: "2022-01-08T00:00:00.000Z",
        votes: 7,
        votesCumulative: 360,
      },
      {
        _id: "2022-01-09T00:00:00.000Z",
        votes: 2,
        votesCumulative: 362,
      },
      {
        _id: "2022-01-13T00:00:00.000Z",
        votes: 11,
        votesCumulative: 373,
      },
      {
        _id: "2022-01-14T00:00:00.000Z",
        votes: 10,
        votesCumulative: 383,
      },
      {
        _id: "2022-01-15T00:00:00.000Z",
        votes: 8,
        votesCumulative: 391,
      },
      {
        _id: "2022-01-16T00:00:00.000Z",
        votes: 8,
        votesCumulative: 399,
      },
      {
        _id: "2022-01-22T00:00:00.000Z",
        votes: 7,
        votesCumulative: 406,
      },
      {
        _id: "2022-01-23T00:00:00.000Z",
        votes: 1,
        votesCumulative: 407,
      },
      {
        _id: "2022-01-24T00:00:00.000Z",
        votes: 3,
        votesCumulative: 410,
      },
      {
        _id: "2022-01-27T00:00:00.000Z",
        votes: 7,
        votesCumulative: 417,
      },
      {
        _id: "2022-01-28T00:00:00.000Z",
        votes: 1,
        votesCumulative: 418,
      },
      {
        _id: "2022-01-29T00:00:00.000Z",
        votes: 1,
        votesCumulative: 419,
      },
      {
        _id: "2022-02-06T00:00:00.000Z",
        votes: 11,
        votesCumulative: 430,
      },
      {
        _id: "2022-02-07T00:00:00.000Z",
        votes: 7,
        votesCumulative: 437,
      },
      {
        _id: "2022-02-13T00:00:00.000Z",
        votes: 2,
        votesCumulative: 439,
      },
      {
        _id: "2022-02-14T00:00:00.000Z",
        votes: 7,
        votesCumulative: 446,
      },
      {
        _id: "2022-02-15T00:00:00.000Z",
        votes: 6,
        votesCumulative: 452,
      },
      {
        _id: "2022-02-16T00:00:00.000Z",
        votes: 3,
        votesCumulative: 455,
      },
      {
        _id: "2022-02-18T00:00:00.000Z",
        votes: 7,
        votesCumulative: 462,
      },
      {
        _id: "2022-02-19T00:00:00.000Z",
        votes: 2,
        votesCumulative: 464,
      },
      {
        _id: "2022-02-20T00:00:00.000Z",
        votes: 2,
        votesCumulative: 466,
      },
      {
        _id: "2022-02-28T00:00:00.000Z",
        votes: 3,
        votesCumulative: 469,
      },
      {
        _id: "2022-03-01T00:00:00.000Z",
        votes: 13,
        votesCumulative: 482,
      },
      {
        _id: "2022-03-02T00:00:00.000Z",
        votes: 2,
        votesCumulative: 484,
      },
      {
        _id: "2022-03-04T00:00:00.000Z",
        votes: 2,
        votesCumulative: 486,
      },
      {
        _id: "2022-03-05T00:00:00.000Z",
        votes: 10,
        votesCumulative: 496,
      },
      {
        _id: "2022-03-06T00:00:00.000Z",
        votes: 12,
        votesCumulative: 508,
      },
      {
        _id: "2022-03-07T00:00:00.000Z",
        votes: 6,
        votesCumulative: 514,
      },
      {
        _id: "2022-03-08T00:00:00.000Z",
        votes: 4,
        votesCumulative: 518,
      },
      {
        _id: "2022-03-11T00:00:00.000Z",
        votes: 2,
        votesCumulative: 520,
      },
      {
        _id: "2022-03-12T00:00:00.000Z",
        votes: 5,
        votesCumulative: 525,
      },
      {
        _id: "2022-03-13T00:00:00.000Z",
        votes: 4,
        votesCumulative: 529,
      },
      {
        _id: "2022-03-14T00:00:00.000Z",
        votes: 9,
        votesCumulative: 538,
      },
      {
        _id: "2022-03-19T00:00:00.000Z",
        votes: 3,
        votesCumulative: 541,
      },
      {
        _id: "2022-03-20T00:00:00.000Z",
        votes: 2,
        votesCumulative: 543,
      },
      {
        _id: "2022-03-21T00:00:00.000Z",
        votes: 12,
        votesCumulative: 555,
      },
      {
        _id: "2022-03-22T00:00:00.000Z",
        votes: 3,
        votesCumulative: 558,
      },
      {
        _id: "2022-03-25T00:00:00.000Z",
        votes: 4,
        votesCumulative: 562,
      },
      {
        _id: "2022-03-26T00:00:00.000Z",
        votes: 2,
        votesCumulative: 564,
      },
      {
        _id: "2022-03-27T00:00:00.000Z",
        votes: 16,
        votesCumulative: 580,
      },
      {
        _id: "2022-03-28T00:00:00.000Z",
        votes: 2,
        votesCumulative: 582,
      },
      {
        _id: "2022-03-29T00:00:00.000Z",
        votes: 6,
        votesCumulative: 588,
      },
      {
        _id: "2022-04-02T00:00:00.000Z",
        votes: 4,
        votesCumulative: 592,
      },
      {
        _id: "2022-04-03T00:00:00.000Z",
        votes: 4,
        votesCumulative: 596,
      },
      {
        _id: "2022-04-04T00:00:00.000Z",
        votes: 24,
        votesCumulative: 620,
      },
      {
        _id: "2022-04-05T00:00:00.000Z",
        votes: 14,
        votesCumulative: 634,
      },
      {
        _id: "2022-04-06T00:00:00.000Z",
        votes: 3,
        votesCumulative: 637,
      },
      {
        _id: "2022-04-07T00:00:00.000Z",
        votes: 6,
        votesCumulative: 643,
      },
      {
        _id: "2022-04-10T00:00:00.000Z",
        votes: 5,
        votesCumulative: 648,
      },
      {
        _id: "2022-04-11T00:00:00.000Z",
        votes: 39,
        votesCumulative: 687,
      },
      {
        _id: "2022-04-12T00:00:00.000Z",
        votes: 18,
        votesCumulative: 705,
      },
      {
        _id: "2022-04-13T00:00:00.000Z",
        votes: 7,
        votesCumulative: 712,
      },
      {
        _id: "2022-04-14T00:00:00.000Z",
        votes: 16,
        votesCumulative: 728,
      },
      {
        _id: "2022-04-15T00:00:00.000Z",
        votes: 12,
        votesCumulative: 740,
      },
      {
        _id: "2022-04-16T00:00:00.000Z",
        votes: 17,
        votesCumulative: 757,
      },
      {
        _id: "2022-04-17T00:00:00.000Z",
        votes: 17,
        votesCumulative: 774,
      },
      {
        _id: "2022-04-18T00:00:00.000Z",
        votes: 20,
        votesCumulative: 794,
      },
      {
        _id: "2022-04-19T00:00:00.000Z",
        votes: 1,
        votesCumulative: 795,
      },
      {
        _id: "2022-04-20T00:00:00.000Z",
        votes: 8,
        votesCumulative: 803,
      },
      {
        _id: "2022-04-21T00:00:00.000Z",
        votes: 21,
        votesCumulative: 824,
      },
      {
        _id: "2022-04-22T00:00:00.000Z",
        votes: 24,
        votesCumulative: 848,
      },
      {
        _id: "2022-04-23T00:00:00.000Z",
        votes: 8,
        votesCumulative: 856,
      },
      {
        _id: "2022-04-24T00:00:00.000Z",
        votes: 4,
        votesCumulative: 860,
      },
      {
        _id: "2022-04-25T00:00:00.000Z",
        votes: 7,
        votesCumulative: 867,
      },
      {
        _id: "2022-04-26T00:00:00.000Z",
        votes: 45,
        votesCumulative: 912,
      },
      {
        _id: "2022-04-27T00:00:00.000Z",
        votes: 37,
        votesCumulative: 949,
      },
      {
        _id: "2022-04-28T00:00:00.000Z",
        votes: 23,
        votesCumulative: 972,
      },
      {
        _id: "2022-04-29T00:00:00.000Z",
        votes: 7,
        votesCumulative: 979,
      },
      {
        _id: "2022-04-30T00:00:00.000Z",
        votes: 6,
        votesCumulative: 985,
      },
      {
        _id: "2022-05-06T00:00:00.000Z",
        votes: 2,
        votesCumulative: 987,
      },
      {
        _id: "2022-05-07T00:00:00.000Z",
        votes: 4,
        votesCumulative: 991,
      },
      {
        _id: "2022-05-08T00:00:00.000Z",
        votes: 13,
        votesCumulative: 1004,
      },
      {
        _id: "2022-05-09T00:00:00.000Z",
        votes: 9,
        votesCumulative: 1013,
      },
      {
        _id: "2022-05-10T00:00:00.000Z",
        votes: 5,
        votesCumulative: 1018,
      },
      {
        _id: "2022-05-11T00:00:00.000Z",
        votes: 3,
        votesCumulative: 1021,
      },
      {
        _id: "2022-05-12T00:00:00.000Z",
        votes: 12,
        votesCumulative: 1033,
      },
      {
        _id: "2022-05-13T00:00:00.000Z",
        votes: 10,
        votesCumulative: 1043,
      },
      {
        _id: "2022-05-14T00:00:00.000Z",
        votes: 29,
        votesCumulative: 1072,
      },
      {
        _id: "2022-05-15T00:00:00.000Z",
        votes: 7,
        votesCumulative: 1079,
      },
      {
        _id: "2022-05-16T00:00:00.000Z",
        votes: 7,
        votesCumulative: 1086,
      },
      {
        _id: "2022-05-17T00:00:00.000Z",
        votes: 4,
        votesCumulative: 1090,
      },
      {
        _id: "2022-05-19T00:00:00.000Z",
        votes: 4,
        votesCumulative: 1094,
      },
      {
        _id: "2022-05-20T00:00:00.000Z",
        votes: 14,
        votesCumulative: 1108,
      },
      {
        _id: "2022-05-21T00:00:00.000Z",
        votes: 7,
        votesCumulative: 1115,
      },
      {
        _id: "2022-05-22T00:00:00.000Z",
        votes: 35,
        votesCumulative: 1150,
      },
      {
        _id: "2022-05-23T00:00:00.000Z",
        votes: 34,
        votesCumulative: 1184,
      },
      {
        _id: "2022-05-24T00:00:00.000Z",
        votes: 16,
        votesCumulative: 1200,
      },
      {
        _id: "2022-05-25T00:00:00.000Z",
        votes: 1,
        votesCumulative: 1201,
      },
      {
        _id: "2022-05-28T00:00:00.000Z",
        votes: 11,
        votesCumulative: 1212,
      },
      {
        _id: "2022-05-29T00:00:00.000Z",
        votes: 15,
        votesCumulative: 1227,
      },
      {
        _id: "2022-05-30T00:00:00.000Z",
        votes: 12,
        votesCumulative: 1239,
      },
      {
        _id: "2022-05-31T00:00:00.000Z",
        votes: 31,
        votesCumulative: 1270,
      },
      {
        _id: "2022-06-01T00:00:00.000Z",
        votes: 25,
        votesCumulative: 1295,
      },
      {
        _id: "2022-06-02T00:00:00.000Z",
        votes: 5,
        votesCumulative: 1300,
      },
      {
        _id: "2022-06-03T00:00:00.000Z",
        votes: 6,
        votesCumulative: 1306,
      },
      {
        _id: "2022-06-07T00:00:00.000Z",
        votes: 8,
        votesCumulative: 1314,
      },
      {
        _id: "2022-06-08T00:00:00.000Z",
        votes: 8,
        votesCumulative: 1322,
      },
      {
        _id: "2022-06-09T00:00:00.000Z",
        votes: 17,
        votesCumulative: 1339,
      },
      {
        _id: "2022-06-10T00:00:00.000Z",
        votes: 38,
        votesCumulative: 1377,
      },
      {
        _id: "2022-06-11T00:00:00.000Z",
        votes: 29,
        votesCumulative: 1406,
      },
      {
        _id: "2022-06-12T00:00:00.000Z",
        votes: 23,
        votesCumulative: 1429,
      },
      {
        _id: "2022-06-13T00:00:00.000Z",
        votes: 23,
        votesCumulative: 1452,
      },
      {
        _id: "2022-06-14T00:00:00.000Z",
        votes: 24,
        votesCumulative: 1476,
      },
      {
        _id: "2022-06-15T00:00:00.000Z",
        votes: 5,
        votesCumulative: 1481,
      },
      {
        _id: "2022-06-16T00:00:00.000Z",
        votes: 4,
        votesCumulative: 1485,
      },
      {
        _id: "2022-06-21T00:00:00.000Z",
        votes: 4,
        votesCumulative: 1489,
      },
      {
        _id: "2022-06-22T00:00:00.000Z",
        votes: 10,
        votesCumulative: 1499,
      },
      {
        _id: "2022-06-23T00:00:00.000Z",
        votes: 2,
        votesCumulative: 1501,
      },
      {
        _id: "2022-06-24T00:00:00.000Z",
        votes: 2,
        votesCumulative: 1503,
      },
      {
        _id: "2022-06-25T00:00:00.000Z",
        votes: 3,
        votesCumulative: 1506,
      },
      {
        _id: "2022-06-26T00:00:00.000Z",
        votes: 16,
        votesCumulative: 1522,
      },
      {
        _id: "2022-06-27T00:00:00.000Z",
        votes: 8,
        votesCumulative: 1530,
      },
      {
        _id: "2022-06-28T00:00:00.000Z",
        votes: 7,
        votesCumulative: 1537,
      },
      {
        _id: "2022-06-29T00:00:00.000Z",
        votes: 6,
        votesCumulative: 1543,
      },
      {
        _id: "2022-06-30T00:00:00.000Z",
        votes: 19,
        votesCumulative: 1562,
      },
      {
        _id: "2022-07-01T00:00:00.000Z",
        votes: 14,
        votesCumulative: 1576,
      },
      {
        _id: "2022-07-02T00:00:00.000Z",
        votes: 3,
        votesCumulative: 1579,
      },
      {
        _id: "2022-07-03T00:00:00.000Z",
        votes: 5,
        votesCumulative: 1584,
      },
      {
        _id: "2022-07-04T00:00:00.000Z",
        votes: 17,
        votesCumulative: 1601,
      },
      {
        _id: "2022-07-05T00:00:00.000Z",
        votes: 27,
        votesCumulative: 1628,
      },
      {
        _id: "2022-07-06T00:00:00.000Z",
        votes: 22,
        votesCumulative: 1650,
      },
      {
        _id: "2022-07-07T00:00:00.000Z",
        votes: 9,
        votesCumulative: 1659,
      },
      {
        _id: "2022-07-08T00:00:00.000Z",
        votes: 16,
        votesCumulative: 1675,
      },
      {
        _id: "2022-07-09T00:00:00.000Z",
        votes: 8,
        votesCumulative: 1683,
      },
      {
        _id: "2022-07-10T00:00:00.000Z",
        votes: 12,
        votesCumulative: 1695,
      },
      {
        _id: "2022-07-11T00:00:00.000Z",
        votes: 7,
        votesCumulative: 1702,
      },
      {
        _id: "2022-07-12T00:00:00.000Z",
        votes: 12,
        votesCumulative: 1714,
      },
      {
        _id: "2022-07-13T00:00:00.000Z",
        votes: 29,
        votesCumulative: 1743,
      },
      {
        _id: "2022-07-14T00:00:00.000Z",
        votes: 46,
        votesCumulative: 1789,
      },
      {
        _id: "2022-07-15T00:00:00.000Z",
        votes: 44,
        votesCumulative: 1833,
      },
      {
        _id: "2022-07-16T00:00:00.000Z",
        votes: 38,
        votesCumulative: 1871,
      },
      {
        _id: "2022-07-17T00:00:00.000Z",
        votes: 15,
        votesCumulative: 1886,
      },
      {
        _id: "2022-07-18T00:00:00.000Z",
        votes: 24,
        votesCumulative: 1910,
      },
      {
        _id: "2022-07-19T00:00:00.000Z",
        votes: 28,
        votesCumulative: 1938,
      },
      {
        _id: "2022-07-20T00:00:00.000Z",
        votes: 16,
        votesCumulative: 1954,
      },
      {
        _id: "2022-07-23T00:00:00.000Z",
        votes: 1,
        votesCumulative: 1955,
      },
      {
        _id: "2022-07-24T00:00:00.000Z",
        votes: 8,
        votesCumulative: 1963,
      },
      {
        _id: "2022-07-25T00:00:00.000Z",
        votes: 14,
        votesCumulative: 1977,
      },
      {
        _id: "2022-07-26T00:00:00.000Z",
        votes: 1,
        votesCumulative: 1978,
      },
      {
        _id: "2022-07-28T00:00:00.000Z",
        votes: 2,
        votesCumulative: 1980,
      },
      {
        _id: "2022-07-29T00:00:00.000Z",
        votes: 9,
        votesCumulative: 1989,
      },
      {
        _id: "2022-07-30T00:00:00.000Z",
        votes: 39,
        votesCumulative: 2028,
      },
      {
        _id: "2022-07-31T00:00:00.000Z",
        votes: 40,
        votesCumulative: 2068,
      },
      {
        _id: "2022-08-01T00:00:00.000Z",
        votes: 45,
        votesCumulative: 2113,
      },
      {
        _id: "2022-08-02T00:00:00.000Z",
        votes: 19,
        votesCumulative: 2132,
      },
      {
        _id: "2022-08-03T00:00:00.000Z",
        votes: 23,
        votesCumulative: 2155,
      },
      {
        _id: "2022-08-04T00:00:00.000Z",
        votes: 9,
        votesCumulative: 2164,
      },
      {
        _id: "2022-08-05T00:00:00.000Z",
        votes: 5,
        votesCumulative: 2169,
      },
      {
        _id: "2022-08-06T00:00:00.000Z",
        votes: 3,
        votesCumulative: 2172,
      },
      {
        _id: "2022-08-07T00:00:00.000Z",
        votes: 1,
        votesCumulative: 2173,
      },
      {
        _id: "2022-08-08T00:00:00.000Z",
        votes: 4,
        votesCumulative: 2177,
      },
      {
        _id: "2022-08-09T00:00:00.000Z",
        votes: 16,
        votesCumulative: 2193,
      },
      {
        _id: "2022-08-10T00:00:00.000Z",
        votes: 6,
        votesCumulative: 2199,
      },
      {
        _id: "2022-08-11T00:00:00.000Z",
        votes: 11,
        votesCumulative: 2210,
      },
      {
        _id: "2022-08-12T00:00:00.000Z",
        votes: 34,
        votesCumulative: 2244,
      },
      {
        _id: "2022-08-13T00:00:00.000Z",
        votes: 11,
        votesCumulative: 2255,
      },
      {
        _id: "2022-08-14T00:00:00.000Z",
        votes: 10,
        votesCumulative: 2265,
      },
      {
        _id: "2022-08-15T00:00:00.000Z",
        votes: 9,
        votesCumulative: 2274,
      },
      {
        _id: "2022-08-16T00:00:00.000Z",
        votes: 8,
        votesCumulative: 2282,
      },
      {
        _id: "2022-08-17T00:00:00.000Z",
        votes: 5,
        votesCumulative: 2287,
      },
      {
        _id: "2022-08-18T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2289,
      },
      {
        _id: "2022-08-19T00:00:00.000Z",
        votes: 13,
        votesCumulative: 2302,
      },
      {
        _id: "2022-08-20T00:00:00.000Z",
        votes: 7,
        votesCumulative: 2309,
      },
      {
        _id: "2022-08-21T00:00:00.000Z",
        votes: 4,
        votesCumulative: 2313,
      },
      {
        _id: "2022-08-22T00:00:00.000Z",
        votes: 7,
        votesCumulative: 2320,
      },
      {
        _id: "2022-08-23T00:00:00.000Z",
        votes: 13,
        votesCumulative: 2333,
      },
      {
        _id: "2022-08-24T00:00:00.000Z",
        votes: 6,
        votesCumulative: 2339,
      },
      {
        _id: "2022-08-25T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2341,
      },
      {
        _id: "2022-09-03T00:00:00.000Z",
        votes: 13,
        votesCumulative: 2354,
      },
      {
        _id: "2022-09-04T00:00:00.000Z",
        votes: 14,
        votesCumulative: 2368,
      },
      {
        _id: "2022-09-05T00:00:00.000Z",
        votes: 25,
        votesCumulative: 2393,
      },
      {
        _id: "2022-09-06T00:00:00.000Z",
        votes: 14,
        votesCumulative: 2407,
      },
      {
        _id: "2022-09-07T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2409,
      },
      {
        _id: "2022-09-09T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2411,
      },
      {
        _id: "2022-09-10T00:00:00.000Z",
        votes: 11,
        votesCumulative: 2422,
      },
      {
        _id: "2022-09-11T00:00:00.000Z",
        votes: 26,
        votesCumulative: 2448,
      },
      {
        _id: "2022-09-12T00:00:00.000Z",
        votes: 40,
        votesCumulative: 2488,
      },
      {
        _id: "2022-09-13T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2490,
      },
      {
        _id: "2022-09-15T00:00:00.000Z",
        votes: 6,
        votesCumulative: 2496,
      },
      {
        _id: "2022-09-16T00:00:00.000Z",
        votes: 14,
        votesCumulative: 2510,
      },
      {
        _id: "2022-09-17T00:00:00.000Z",
        votes: 18,
        votesCumulative: 2528,
      },
      {
        _id: "2022-09-18T00:00:00.000Z",
        votes: 4,
        votesCumulative: 2532,
      },
      {
        _id: "2022-09-19T00:00:00.000Z",
        votes: 10,
        votesCumulative: 2542,
      },
      {
        _id: "2022-09-20T00:00:00.000Z",
        votes: 12,
        votesCumulative: 2554,
      },
      {
        _id: "2022-09-21T00:00:00.000Z",
        votes: 27,
        votesCumulative: 2581,
      },
      {
        _id: "2022-09-22T00:00:00.000Z",
        votes: 14,
        votesCumulative: 2595,
      },
      {
        _id: "2022-09-23T00:00:00.000Z",
        votes: 6,
        votesCumulative: 2601,
      },
      {
        _id: "2022-09-24T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2603,
      },
      {
        _id: "2022-09-29T00:00:00.000Z",
        votes: 4,
        votesCumulative: 2607,
      },
      {
        _id: "2022-09-30T00:00:00.000Z",
        votes: 17,
        votesCumulative: 2624,
      },
      {
        _id: "2022-10-01T00:00:00.000Z",
        votes: 22,
        votesCumulative: 2646,
      },
      {
        _id: "2022-10-02T00:00:00.000Z",
        votes: 93,
        votesCumulative: 2739,
      },
      {
        _id: "2022-10-03T00:00:00.000Z",
        votes: 9,
        votesCumulative: 2748,
      },
      {
        _id: "2022-10-05T00:00:00.000Z",
        votes: 1,
        votesCumulative: 2749,
      },
      {
        _id: "2022-10-06T00:00:00.000Z",
        votes: 15,
        votesCumulative: 2764,
      },
      {
        _id: "2022-10-07T00:00:00.000Z",
        votes: 26,
        votesCumulative: 2790,
      },
      {
        _id: "2022-10-08T00:00:00.000Z",
        votes: 20,
        votesCumulative: 2810,
      },
      {
        _id: "2022-10-09T00:00:00.000Z",
        votes: 16,
        votesCumulative: 2826,
      },
      {
        _id: "2022-10-10T00:00:00.000Z",
        votes: 3,
        votesCumulative: 2829,
      },
      {
        _id: "2022-10-13T00:00:00.000Z",
        votes: 20,
        votesCumulative: 2849,
      },
      {
        _id: "2022-10-14T00:00:00.000Z",
        votes: 13,
        votesCumulative: 2862,
      },
      {
        _id: "2022-10-15T00:00:00.000Z",
        votes: 3,
        votesCumulative: 2865,
      },
      {
        _id: "2022-10-16T00:00:00.000Z",
        votes: 2,
        votesCumulative: 2867,
      },
      {
        _id: "2022-10-17T00:00:00.000Z",
        votes: 14,
        votesCumulative: 2881,
      },
      {
        _id: "2022-10-18T00:00:00.000Z",
        votes: 19,
        votesCumulative: 2900,
      },
      {
        _id: "2022-10-19T00:00:00.000Z",
        votes: 8,
        votesCumulative: 2908,
      },
      {
        _id: "2022-10-20T00:00:00.000Z",
        votes: 23,
        votesCumulative: 2931,
      },
      {
        _id: "2022-10-21T00:00:00.000Z",
        votes: 46,
        votesCumulative: 2977,
      },
      {
        _id: "2022-10-22T00:00:00.000Z",
        votes: 45,
        votesCumulative: 3022,
      },
      {
        _id: "2022-10-23T00:00:00.000Z",
        votes: 38,
        votesCumulative: 3060,
      },
      {
        _id: "2022-10-24T00:00:00.000Z",
        votes: 50,
        votesCumulative: 3110,
      },
      {
        _id: "2022-10-25T00:00:00.000Z",
        votes: 29,
        votesCumulative: 3139,
      },
      {
        _id: "2022-10-26T00:00:00.000Z",
        votes: 11,
        votesCumulative: 3150,
      },
      {
        _id: "2022-10-27T00:00:00.000Z",
        votes: 9,
        votesCumulative: 3159,
      },
      {
        _id: "2022-10-28T00:00:00.000Z",
        votes: 24,
        votesCumulative: 3183,
      },
      {
        _id: "2022-10-29T00:00:00.000Z",
        votes: 20,
        votesCumulative: 3203,
      },
      {
        _id: "2022-10-30T00:00:00.000Z",
        votes: 17,
        votesCumulative: 3220,
      },
      {
        _id: "2022-10-31T00:00:00.000Z",
        votes: 24,
        votesCumulative: 3244,
      },
      {
        _id: "2022-11-01T00:00:00.000Z",
        votes: 19,
        votesCumulative: 3263,
      },
      {
        _id: "2022-11-02T00:00:00.000Z",
        votes: 2,
        votesCumulative: 3265,
      },
      {
        _id: "2022-11-03T00:00:00.000Z",
        votes: 18,
        votesCumulative: 3283,
      },
      {
        _id: "2022-11-04T00:00:00.000Z",
        votes: 27,
        votesCumulative: 3310,
      },
      {
        _id: "2022-11-05T00:00:00.000Z",
        votes: 3,
        votesCumulative: 3313,
      },
      {
        _id: "2022-11-06T00:00:00.000Z",
        votes: 5,
        votesCumulative: 3318,
      },
      {
        _id: "2022-11-07T00:00:00.000Z",
        votes: 11,
        votesCumulative: 3329,
      },
      {
        _id: "2022-11-08T00:00:00.000Z",
        votes: 11,
        votesCumulative: 3340,
      },
      {
        _id: "2022-11-09T00:00:00.000Z",
        votes: 5,
        votesCumulative: 3345,
      },
      {
        _id: "2022-11-10T00:00:00.000Z",
        votes: 8,
        votesCumulative: 3353,
      },
      {
        _id: "2022-11-11T00:00:00.000Z",
        votes: 6,
        votesCumulative: 3359,
      },
      {
        _id: "2022-11-12T00:00:00.000Z",
        votes: 17,
        votesCumulative: 3376,
      },
      {
        _id: "2022-11-13T00:00:00.000Z",
        votes: 7,
        votesCumulative: 3383,
      },
      {
        _id: "2022-11-14T00:00:00.000Z",
        votes: 10,
        votesCumulative: 3393,
      },
      {
        _id: "2022-11-15T00:00:00.000Z",
        votes: 8,
        votesCumulative: 3401,
      },
      {
        _id: "2022-11-16T00:00:00.000Z",
        votes: 16,
        votesCumulative: 3417,
      },
      {
        _id: "2022-11-17T00:00:00.000Z",
        votes: 18,
        votesCumulative: 3435,
      },
      {
        _id: "2022-11-18T00:00:00.000Z",
        votes: 23,
        votesCumulative: 3458,
      },
      {
        _id: "2022-11-19T00:00:00.000Z",
        votes: 33,
        votesCumulative: 3491,
      },
      {
        _id: "2022-11-20T00:00:00.000Z",
        votes: 32,
        votesCumulative: 3523,
      },
      {
        _id: "2022-11-21T00:00:00.000Z",
        votes: 21,
        votesCumulative: 3544,
      },
      {
        _id: "2022-11-22T00:00:00.000Z",
        votes: 5,
        votesCumulative: 3549,
      },
      {
        _id: "2022-11-23T00:00:00.000Z",
        votes: 19,
        votesCumulative: 3568,
      },
      {
        _id: "2022-11-24T00:00:00.000Z",
        votes: 21,
        votesCumulative: 3589,
      },
      {
        _id: "2022-11-25T00:00:00.000Z",
        votes: 8,
        votesCumulative: 3597,
      },
      {
        _id: "2022-11-26T00:00:00.000Z",
        votes: 4,
        votesCumulative: 3601,
      },
      {
        _id: "2022-11-27T00:00:00.000Z",
        votes: 10,
        votesCumulative: 3611,
      },
      {
        _id: "2022-11-28T00:00:00.000Z",
        votes: 29,
        votesCumulative: 3640,
      },
      {
        _id: "2022-11-29T00:00:00.000Z",
        votes: 9,
        votesCumulative: 3649,
      },
      {
        _id: "2022-11-30T00:00:00.000Z",
        votes: 35,
        votesCumulative: 3684,
      },
      {
        _id: "2022-12-01T00:00:00.000Z",
        votes: 8,
        votesCumulative: 3692,
      },
      {
        _id: "2022-12-02T00:00:00.000Z",
        votes: 1,
        votesCumulative: 3693,
      },
      {
        _id: "2022-12-03T00:00:00.000Z",
        votes: 5,
        votesCumulative: 3698,
      },
      {
        _id: "2022-12-04T00:00:00.000Z",
        votes: 11,
        votesCumulative: 3709,
      },
      {
        _id: "2022-12-05T00:00:00.000Z",
        votes: 20,
        votesCumulative: 3729,
      },
      {
        _id: "2022-12-06T00:00:00.000Z",
        votes: 25,
        votesCumulative: 3754,
      },
      {
        _id: "2022-12-07T00:00:00.000Z",
        votes: 35,
        votesCumulative: 3789,
      },
      {
        _id: "2022-12-08T00:00:00.000Z",
        votes: 32,
        votesCumulative: 3821,
      },
      {
        _id: "2022-12-09T00:00:00.000Z",
        votes: 50,
        votesCumulative: 3871,
      },
      {
        _id: "2022-12-10T00:00:00.000Z",
        votes: 38,
        votesCumulative: 3909,
      },
      {
        _id: "2022-12-11T00:00:00.000Z",
        votes: 12,
        votesCumulative: 3921,
      },
      {
        _id: "2022-12-12T00:00:00.000Z",
        votes: 54,
        votesCumulative: 3975,
      },
      {
        _id: "2022-12-13T00:00:00.000Z",
        votes: 49,
        votesCumulative: 4024,
      },
      {
        _id: "2022-12-14T00:00:00.000Z",
        votes: 35,
        votesCumulative: 4059,
      },
      {
        _id: "2022-12-15T00:00:00.000Z",
        votes: 20,
        votesCumulative: 4079,
      },
      {
        _id: "2022-12-16T00:00:00.000Z",
        votes: 16,
        votesCumulative: 4095,
      },
      {
        _id: "2022-12-17T00:00:00.000Z",
        votes: 10,
        votesCumulative: 4105,
      },
      {
        _id: "2022-12-18T00:00:00.000Z",
        votes: 19,
        votesCumulative: 4124,
      },
      {
        _id: "2022-12-19T00:00:00.000Z",
        votes: 68,
        votesCumulative: 4192,
      },
      {
        _id: "2022-12-20T00:00:00.000Z",
        votes: 106,
        votesCumulative: 4298,
      },
      {
        _id: "2022-12-21T00:00:00.000Z",
        votes: 56,
        votesCumulative: 4354,
      },
      {
        _id: "2022-12-22T00:00:00.000Z",
        votes: 74,
        votesCumulative: 4428,
      },
      {
        _id: "2022-12-23T00:00:00.000Z",
        votes: 44,
        votesCumulative: 4472,
      },
      {
        _id: "2022-12-24T00:00:00.000Z",
        votes: 12,
        votesCumulative: 4484,
      },
      {
        _id: "2022-12-25T00:00:00.000Z",
        votes: 7,
        votesCumulative: 4491,
      },
      {
        _id: "2022-12-26T00:00:00.000Z",
        votes: 3,
        votesCumulative: 4494,
      },
      {
        _id: "2022-12-27T00:00:00.000Z",
        votes: 16,
        votesCumulative: 4510,
      },
      {
        _id: "2022-12-28T00:00:00.000Z",
        votes: 8,
        votesCumulative: 4518,
      },
      {
        _id: "2022-12-29T00:00:00.000Z",
        votes: 12,
        votesCumulative: 4530,
      },
      {
        _id: "2023-01-01T00:00:00.000Z",
        votes: 9,
        votesCumulative: 4539,
      },
      {
        _id: "2023-01-02T00:00:00.000Z",
        votes: 8,
        votesCumulative: 4547,
      },
      {
        _id: "2023-01-03T00:00:00.000Z",
        votes: 18,
        votesCumulative: 4565,
      },
      {
        _id: "2023-01-04T00:00:00.000Z",
        votes: 16,
        votesCumulative: 4581,
      },
      {
        _id: "2023-01-05T00:00:00.000Z",
        votes: 29,
        votesCumulative: 4610,
      },
      {
        _id: "2023-01-06T00:00:00.000Z",
        votes: 17,
        votesCumulative: 4627,
      },
      {
        _id: "2023-01-07T00:00:00.000Z",
        votes: 14,
        votesCumulative: 4641,
      },
      {
        _id: "2023-01-08T00:00:00.000Z",
        votes: 21,
        votesCumulative: 4662,
      },
      {
        _id: "2023-01-09T00:00:00.000Z",
        votes: 28,
        votesCumulative: 4690,
      },
      {
        _id: "2023-01-10T00:00:00.000Z",
        votes: 11,
        votesCumulative: 4701,
      },
      {
        _id: "2023-01-11T00:00:00.000Z",
        votes: 12,
        votesCumulative: 4713,
      },
      {
        _id: "2023-01-12T00:00:00.000Z",
        votes: 4,
        votesCumulative: 4717,
      },
      {
        _id: "2023-01-14T00:00:00.000Z",
        votes: 16,
        votesCumulative: 4733,
      },
      {
        _id: "2023-01-15T00:00:00.000Z",
        votes: 28,
        votesCumulative: 4761,
      },
      {
        _id: "2023-01-16T00:00:00.000Z",
        votes: 69,
        votesCumulative: 4830,
      },
      {
        _id: "2023-01-17T00:00:00.000Z",
        votes: 47,
        votesCumulative: 4877,
      },
      {
        _id: "2023-01-18T00:00:00.000Z",
        votes: 35,
        votesCumulative: 4912,
      },
      {
        _id: "2023-01-19T00:00:00.000Z",
        votes: 54,
        votesCumulative: 4966,
      },
      {
        _id: "2023-01-20T00:00:00.000Z",
        votes: 54,
        votesCumulative: 5020,
      },
      {
        _id: "2023-01-21T00:00:00.000Z",
        votes: 18,
        votesCumulative: 5038,
      },
      {
        _id: "2023-01-22T00:00:00.000Z",
        votes: 47,
        votesCumulative: 5085,
      },
      {
        _id: "2023-01-23T00:00:00.000Z",
        votes: 52,
        votesCumulative: 5137,
      },
      {
        _id: "2023-01-24T00:00:00.000Z",
        votes: 32,
        votesCumulative: 5169,
      },
      {
        _id: "2023-01-25T00:00:00.000Z",
        votes: 73,
        votesCumulative: 5242,
      },
      {
        _id: "2023-01-26T00:00:00.000Z",
        votes: 36,
        votesCumulative: 5278,
      },
      {
        _id: "2023-01-27T00:00:00.000Z",
        votes: 35,
        votesCumulative: 5313,
      },
      {
        _id: "2023-01-28T00:00:00.000Z",
        votes: 30,
        votesCumulative: 5343,
      },
      {
        _id: "2023-01-29T00:00:00.000Z",
        votes: 17,
        votesCumulative: 5360,
      },
      {
        _id: "2023-01-30T00:00:00.000Z",
        votes: 31,
        votesCumulative: 5391,
      },
      {
        _id: "2023-01-31T00:00:00.000Z",
        votes: 31,
        votesCumulative: 5422,
      },
      {
        _id: "2023-02-01T00:00:00.000Z",
        votes: 24,
        votesCumulative: 5446,
      },
      {
        _id: "2023-02-02T00:00:00.000Z",
        votes: 14,
        votesCumulative: 5460,
      },
      {
        _id: "2023-02-03T00:00:00.000Z",
        votes: 6,
        votesCumulative: 5466,
      },
      {
        _id: "2023-02-04T00:00:00.000Z",
        votes: 3,
        votesCumulative: 5469,
      },
      {
        _id: "2023-02-05T00:00:00.000Z",
        votes: 9,
        votesCumulative: 5478,
      },
      {
        _id: "2023-02-06T00:00:00.000Z",
        votes: 30,
        votesCumulative: 5508,
      },
      {
        _id: "2023-02-07T00:00:00.000Z",
        votes: 42,
        votesCumulative: 5550,
      },
      {
        _id: "2023-02-08T00:00:00.000Z",
        votes: 86,
        votesCumulative: 5636,
      },
      {
        _id: "2023-02-09T00:00:00.000Z",
        votes: 40,
        votesCumulative: 5676,
      },
      {
        _id: "2023-02-10T00:00:00.000Z",
        votes: 30,
        votesCumulative: 5706,
      },
      {
        _id: "2023-02-11T00:00:00.000Z",
        votes: 38,
        votesCumulative: 5744,
      },
      {
        _id: "2023-02-12T00:00:00.000Z",
        votes: 28,
        votesCumulative: 5772,
      },
      {
        _id: "2023-02-13T00:00:00.000Z",
        votes: 24,
        votesCumulative: 5796,
      },
      {
        _id: "2023-02-14T00:00:00.000Z",
        votes: 79,
        votesCumulative: 5875,
      },
      {
        _id: "2023-02-15T00:00:00.000Z",
        votes: 72,
        votesCumulative: 5947,
      },
      {
        _id: "2023-02-16T00:00:00.000Z",
        votes: 13,
        votesCumulative: 5960,
      },
      {
        _id: "2023-02-17T00:00:00.000Z",
        votes: 15,
        votesCumulative: 5975,
      },
      {
        _id: "2023-02-18T00:00:00.000Z",
        votes: 10,
        votesCumulative: 5985,
      },
      {
        _id: "2023-02-19T00:00:00.000Z",
        votes: 5,
        votesCumulative: 5990,
      },
      {
        _id: "2023-02-20T00:00:00.000Z",
        votes: 12,
        votesCumulative: 6002,
      },
      {
        _id: "2023-02-21T00:00:00.000Z",
        votes: 11,
        votesCumulative: 6013,
      },
      {
        _id: "2023-02-22T00:00:00.000Z",
        votes: 33,
        votesCumulative: 6046,
      },
      {
        _id: "2023-02-28T00:00:00.000Z",
        votes: 2,
        votesCumulative: 6048,
      },
      {
        _id: "2023-03-01T00:00:00.000Z",
        votes: 11,
        votesCumulative: 6059,
      },
      {
        _id: "2023-03-02T00:00:00.000Z",
        votes: 12,
        votesCumulative: 6071,
      },
      {
        _id: "2023-03-03T00:00:00.000Z",
        votes: 27,
        votesCumulative: 6098,
      },
      {
        _id: "2023-03-04T00:00:00.000Z",
        votes: 14,
        votesCumulative: 6112,
      },
      {
        _id: "2023-03-05T00:00:00.000Z",
        votes: 3,
        votesCumulative: 6115,
      },
      {
        _id: "2023-03-06T00:00:00.000Z",
        votes: 62,
        votesCumulative: 6177,
      },
      {
        _id: "2023-03-07T00:00:00.000Z",
        votes: 21,
        votesCumulative: 6198,
      },
      {
        _id: "2023-03-08T00:00:00.000Z",
        votes: 29,
        votesCumulative: 6227,
      },
      {
        _id: "2023-03-09T00:00:00.000Z",
        votes: 34,
        votesCumulative: 6261,
      },
      {
        _id: "2023-03-10T00:00:00.000Z",
        votes: 9,
        votesCumulative: 6270,
      },
      {
        _id: "2023-03-11T00:00:00.000Z",
        votes: 3,
        votesCumulative: 6273,
      },
      {
        _id: "2023-03-13T00:00:00.000Z",
        votes: 24,
        votesCumulative: 6297,
      },
      {
        _id: "2023-03-14T00:00:00.000Z",
        votes: 35,
        votesCumulative: 6332,
      },
      {
        _id: "2023-03-15T00:00:00.000Z",
        votes: 11,
        votesCumulative: 6343,
      },
      {
        _id: "2023-03-16T00:00:00.000Z",
        votes: 9,
        votesCumulative: 6352,
      },
      {
        _id: "2023-03-17T00:00:00.000Z",
        votes: 10,
        votesCumulative: 6362,
      },
      {
        _id: "2023-03-18T00:00:00.000Z",
        votes: 10,
        votesCumulative: 6372,
      },
      {
        _id: "2023-03-19T00:00:00.000Z",
        votes: 1,
        votesCumulative: 6373,
      },
      {
        _id: "2023-03-20T00:00:00.000Z",
        votes: 12,
        votesCumulative: 6385,
      },
      {
        _id: "2023-03-21T00:00:00.000Z",
        votes: 13,
        votesCumulative: 6398,
      },
      {
        _id: "2023-03-22T00:00:00.000Z",
        votes: 59,
        votesCumulative: 6457,
      },
      {
        _id: "2023-03-23T00:00:00.000Z",
        votes: 27,
        votesCumulative: 6484,
      },
      {
        _id: "2023-03-24T00:00:00.000Z",
        votes: 49,
        votesCumulative: 6533,
      },
      {
        _id: "2023-03-25T00:00:00.000Z",
        votes: 14,
        votesCumulative: 6547,
      },
      {
        _id: "2023-03-26T00:00:00.000Z",
        votes: 36,
        votesCumulative: 6583,
      },
      {
        _id: "2023-03-27T00:00:00.000Z",
        votes: 34,
        votesCumulative: 6617,
      },
      {
        _id: "2023-03-28T00:00:00.000Z",
        votes: 21,
        votesCumulative: 6638,
      },
      {
        _id: "2023-03-29T00:00:00.000Z",
        votes: 22,
        votesCumulative: 6660,
      },
      {
        _id: "2023-03-30T00:00:00.000Z",
        votes: 42,
        votesCumulative: 6702,
      },
      {
        _id: "2023-03-31T00:00:00.000Z",
        votes: 12,
        votesCumulative: 6714,
      },
      {
        _id: "2023-04-01T00:00:00.000Z",
        votes: 5,
        votesCumulative: 6719,
      },
      {
        _id: "2023-04-02T00:00:00.000Z",
        votes: 2,
        votesCumulative: 6721,
      },
      {
        _id: "2023-04-03T00:00:00.000Z",
        votes: 14,
        votesCumulative: 6735,
      },
      {
        _id: "2023-04-04T00:00:00.000Z",
        votes: 43,
        votesCumulative: 6778,
      },
      {
        _id: "2023-04-05T00:00:00.000Z",
        votes: 29,
        votesCumulative: 6807,
      },
      {
        _id: "2023-04-06T00:00:00.000Z",
        votes: 13,
        votesCumulative: 6820,
      },
      {
        _id: "2023-04-07T00:00:00.000Z",
        votes: 59,
        votesCumulative: 6879,
      },
      {
        _id: "2023-04-08T00:00:00.000Z",
        votes: 46,
        votesCumulative: 6925,
      },
      {
        _id: "2023-04-09T00:00:00.000Z",
        votes: 33,
        votesCumulative: 6958,
      },
      {
        _id: "2023-04-10T00:00:00.000Z",
        votes: 11,
        votesCumulative: 6969,
      },
      {
        _id: "2023-04-11T00:00:00.000Z",
        votes: 8,
        votesCumulative: 6977,
      },
      {
        _id: "2023-04-12T00:00:00.000Z",
        votes: 7,
        votesCumulative: 6984,
      },
      {
        _id: "2023-04-13T00:00:00.000Z",
        votes: 7,
        votesCumulative: 6991,
      },
      {
        _id: "2023-04-14T00:00:00.000Z",
        votes: 4,
        votesCumulative: 6995,
      },
      {
        _id: "2023-04-15T00:00:00.000Z",
        votes: 9,
        votesCumulative: 7004,
      },
      {
        _id: "2023-04-16T00:00:00.000Z",
        votes: 14,
        votesCumulative: 7018,
      },
      {
        _id: "2023-04-17T00:00:00.000Z",
        votes: 9,
        votesCumulative: 7027,
      },
      {
        _id: "2023-04-18T00:00:00.000Z",
        votes: 24,
        votesCumulative: 7051,
      },
      {
        _id: "2023-04-19T00:00:00.000Z",
        votes: 22,
        votesCumulative: 7073,
      },
      {
        _id: "2023-04-20T00:00:00.000Z",
        votes: 8,
        votesCumulative: 7081,
      },
      {
        _id: "2023-04-21T00:00:00.000Z",
        votes: 11,
        votesCumulative: 7092,
      },
      {
        _id: "2023-04-22T00:00:00.000Z",
        votes: 7,
        votesCumulative: 7099,
      },
      {
        _id: "2023-04-23T00:00:00.000Z",
        votes: 18,
        votesCumulative: 7117,
      },
      {
        _id: "2023-04-25T00:00:00.000Z",
        votes: 3,
        votesCumulative: 7120,
      },
      {
        _id: "2023-04-26T00:00:00.000Z",
        votes: 6,
        votesCumulative: 7126,
      },
      {
        _id: "2023-04-27T00:00:00.000Z",
        votes: 4,
        votesCumulative: 7130,
      },
      {
        _id: "2023-04-28T00:00:00.000Z",
        votes: 5,
        votesCumulative: 7135,
      },
      {
        _id: "2023-04-29T00:00:00.000Z",
        votes: 14,
        votesCumulative: 7149,
      },
      {
        _id: "2023-04-30T00:00:00.000Z",
        votes: 28,
        votesCumulative: 7177,
      },
      {
        _id: "2023-05-01T00:00:00.000Z",
        votes: 53,
        votesCumulative: 7230,
      },
      {
        _id: "2023-05-02T00:00:00.000Z",
        votes: 40,
        votesCumulative: 7270,
      },
      {
        _id: "2023-05-03T00:00:00.000Z",
        votes: 79,
        votesCumulative: 7349,
      },
      {
        _id: "2023-05-04T00:00:00.000Z",
        votes: 102,
        votesCumulative: 7451,
      },
      {
        _id: "2023-05-05T00:00:00.000Z",
        votes: 37,
        votesCumulative: 7488,
      },
      {
        _id: "2023-05-06T00:00:00.000Z",
        votes: 31,
        votesCumulative: 7519,
      },
      {
        _id: "2023-05-07T00:00:00.000Z",
        votes: 32,
        votesCumulative: 7551,
      },
      {
        _id: "2023-05-08T00:00:00.000Z",
        votes: 40,
        votesCumulative: 7591,
      },
      {
        _id: "2023-05-09T00:00:00.000Z",
        votes: 36,
        votesCumulative: 7627,
      },
      {
        _id: "2023-05-10T00:00:00.000Z",
        votes: 30,
        votesCumulative: 7657,
      },
      {
        _id: "2023-05-11T00:00:00.000Z",
        votes: 15,
        votesCumulative: 7672,
      },
      {
        _id: "2023-05-12T00:00:00.000Z",
        votes: 23,
        votesCumulative: 7695,
      },
      {
        _id: "2023-05-13T00:00:00.000Z",
        votes: 9,
        votesCumulative: 7704,
      },
      {
        _id: "2023-05-14T00:00:00.000Z",
        votes: 12,
        votesCumulative: 7716,
      },
      {
        _id: "2023-05-15T00:00:00.000Z",
        votes: 98,
        votesCumulative: 7814,
      },
      {
        _id: "2023-05-16T00:00:00.000Z",
        votes: 76,
        votesCumulative: 7890,
      },
      {
        _id: "2023-05-17T00:00:00.000Z",
        votes: 50,
        votesCumulative: 7940,
      },
      {
        _id: "2023-05-18T00:00:00.000Z",
        votes: 38,
        votesCumulative: 7978,
      },
      {
        _id: "2023-05-19T00:00:00.000Z",
        votes: 26,
        votesCumulative: 8004,
      },
      {
        _id: "2023-05-20T00:00:00.000Z",
        votes: 15,
        votesCumulative: 8019,
      },
      {
        _id: "2023-05-21T00:00:00.000Z",
        votes: 4,
        votesCumulative: 8023,
      },
      {
        _id: "2023-05-22T00:00:00.000Z",
        votes: 8,
        votesCumulative: 8031,
      },
      {
        _id: "2023-05-23T00:00:00.000Z",
        votes: 5,
        votesCumulative: 8036,
      },
      {
        _id: "2023-05-24T00:00:00.000Z",
        votes: 4,
        votesCumulative: 8040,
      },
      {
        _id: "2023-05-25T00:00:00.000Z",
        votes: 26,
        votesCumulative: 8066,
      },
      {
        _id: "2023-05-26T00:00:00.000Z",
        votes: 30,
        votesCumulative: 8096,
      },
      {
        _id: "2023-05-27T00:00:00.000Z",
        votes: 18,
        votesCumulative: 8114,
      },
      {
        _id: "2023-05-28T00:00:00.000Z",
        votes: 2,
        votesCumulative: 8116,
      },
      {
        _id: "2023-05-29T00:00:00.000Z",
        votes: 20,
        votesCumulative: 8136,
      },
      {
        _id: "2023-05-30T00:00:00.000Z",
        votes: 13,
        votesCumulative: 8149,
      },
      {
        _id: "2023-05-31T00:00:00.000Z",
        votes: 15,
        votesCumulative: 8164,
      },
      {
        _id: "2023-06-01T00:00:00.000Z",
        votes: 17,
        votesCumulative: 8181,
      },
      {
        _id: "2023-06-02T00:00:00.000Z",
        votes: 17,
        votesCumulative: 8198,
      },
      {
        _id: "2023-06-03T00:00:00.000Z",
        votes: 9,
        votesCumulative: 8207,
      },
      {
        _id: "2023-06-04T00:00:00.000Z",
        votes: 15,
        votesCumulative: 8222,
      },
      {
        _id: "2023-06-05T00:00:00.000Z",
        votes: 15,
        votesCumulative: 8237,
      },
      {
        _id: "2023-06-06T00:00:00.000Z",
        votes: 8,
        votesCumulative: 8245,
      },
      {
        _id: "2023-06-07T00:00:00.000Z",
        votes: 33,
        votesCumulative: 8278,
      },
      {
        _id: "2023-06-08T00:00:00.000Z",
        votes: 49,
        votesCumulative: 8327,
      },
      {
        _id: "2023-06-09T00:00:00.000Z",
        votes: 23,
        votesCumulative: 8350,
      },
      {
        _id: "2023-06-10T00:00:00.000Z",
        votes: 7,
        votesCumulative: 8357,
      },
      {
        _id: "2023-06-11T00:00:00.000Z",
        votes: 10,
        votesCumulative: 8367,
      },
      {
        _id: "2023-06-12T00:00:00.000Z",
        votes: 30,
        votesCumulative: 8397,
      },
      {
        _id: "2023-06-13T00:00:00.000Z",
        votes: 22,
        votesCumulative: 8419,
      },
      {
        _id: "2023-06-14T00:00:00.000Z",
        votes: 9,
        votesCumulative: 8428,
      },
      {
        _id: "2023-06-15T00:00:00.000Z",
        votes: 40,
        votesCumulative: 8468,
      },
      {
        _id: "2023-06-16T00:00:00.000Z",
        votes: 41,
        votesCumulative: 8509,
      },
      {
        _id: "2023-06-17T00:00:00.000Z",
        votes: 8,
        votesCumulative: 8517,
      },
      {
        _id: "2023-06-18T00:00:00.000Z",
        votes: 11,
        votesCumulative: 8528,
      },
      {
        _id: "2023-06-19T00:00:00.000Z",
        votes: 29,
        votesCumulative: 8557,
      },
      {
        _id: "2023-06-20T00:00:00.000Z",
        votes: 29,
        votesCumulative: 8586,
      },
      {
        _id: "2023-06-21T00:00:00.000Z",
        votes: 19,
        votesCumulative: 8605,
      },
      {
        _id: "2023-06-22T00:00:00.000Z",
        votes: 33,
        votesCumulative: 8638,
      },
      {
        _id: "2023-06-23T00:00:00.000Z",
        votes: 40,
        votesCumulative: 8678,
      },
      {
        _id: "2023-06-24T00:00:00.000Z",
        votes: 46,
        votesCumulative: 8724,
      },
      {
        _id: "2023-06-25T00:00:00.000Z",
        votes: 20,
        votesCumulative: 8744,
      },
      {
        _id: "2023-06-26T00:00:00.000Z",
        votes: 34,
        votesCumulative: 8778,
      },
      {
        _id: "2023-06-27T00:00:00.000Z",
        votes: 41,
        votesCumulative: 8819,
      },
      {
        _id: "2023-06-28T00:00:00.000Z",
        votes: 37,
        votesCumulative: 8856,
      },
      {
        _id: "2023-06-29T00:00:00.000Z",
        votes: 20,
        votesCumulative: 8876,
      },
      {
        _id: "2023-06-30T00:00:00.000Z",
        votes: 34,
        votesCumulative: 8910,
      },
      {
        _id: "2023-07-01T00:00:00.000Z",
        votes: 29,
        votesCumulative: 8939,
      },
      {
        _id: "2023-07-02T00:00:00.000Z",
        votes: 14,
        votesCumulative: 8953,
      },
      {
        _id: "2023-07-03T00:00:00.000Z",
        votes: 10,
        votesCumulative: 8963,
      },
      {
        _id: "2023-07-04T00:00:00.000Z",
        votes: 5,
        votesCumulative: 8968,
      },
      {
        _id: "2023-07-05T00:00:00.000Z",
        votes: 41,
        votesCumulative: 9009,
      },
      {
        _id: "2023-07-06T00:00:00.000Z",
        votes: 53,
        votesCumulative: 9062,
      },
      {
        _id: "2023-07-07T00:00:00.000Z",
        votes: 68,
        votesCumulative: 9130,
      },
      {
        _id: "2023-07-08T00:00:00.000Z",
        votes: 12,
        votesCumulative: 9142,
      },
      {
        _id: "2023-07-09T00:00:00.000Z",
        votes: 41,
        votesCumulative: 9183,
      },
      {
        _id: "2023-07-10T00:00:00.000Z",
        votes: 41,
        votesCumulative: 9224,
      },
      {
        _id: "2023-07-11T00:00:00.000Z",
        votes: 25,
        votesCumulative: 9249,
      },
      {
        _id: "2023-07-12T00:00:00.000Z",
        votes: 29,
        votesCumulative: 9278,
      },
      {
        _id: "2023-07-13T00:00:00.000Z",
        votes: 19,
        votesCumulative: 9297,
      },
      {
        _id: "2023-07-14T00:00:00.000Z",
        votes: 24,
        votesCumulative: 9321,
      },
      {
        _id: "2023-07-15T00:00:00.000Z",
        votes: 23,
        votesCumulative: 9344,
      },
      {
        _id: "2023-07-16T00:00:00.000Z",
        votes: 11,
        votesCumulative: 9355,
      },
      {
        _id: "2023-07-17T00:00:00.000Z",
        votes: 10,
        votesCumulative: 9365,
      },
      {
        _id: "2023-07-18T00:00:00.000Z",
        votes: 49,
        votesCumulative: 9414,
      },
      {
        _id: "2023-07-19T00:00:00.000Z",
        votes: 56,
        votesCumulative: 9470,
      },
      {
        _id: "2023-07-20T00:00:00.000Z",
        votes: 28,
        votesCumulative: 9498,
      },
      {
        _id: "2023-07-21T00:00:00.000Z",
        votes: 35,
        votesCumulative: 9533,
      },
      {
        _id: "2023-07-22T00:00:00.000Z",
        votes: 52,
        votesCumulative: 9585,
      },
      {
        _id: "2023-07-23T00:00:00.000Z",
        votes: 29,
        votesCumulative: 9614,
      },
      {
        _id: "2023-07-24T00:00:00.000Z",
        votes: 76,
        votesCumulative: 9690,
      },
      {
        _id: "2023-07-25T00:00:00.000Z",
        votes: 40,
        votesCumulative: 9730,
      },
      {
        _id: "2023-07-26T00:00:00.000Z",
        votes: 65,
        votesCumulative: 9795,
      },
      {
        _id: "2023-07-27T00:00:00.000Z",
        votes: 28,
        votesCumulative: 9823,
      },
      {
        _id: "2023-07-28T00:00:00.000Z",
        votes: 33,
        votesCumulative: 9856,
      },
      {
        _id: "2023-07-29T00:00:00.000Z",
        votes: 12,
        votesCumulative: 9868,
      },
      {
        _id: "2023-07-30T00:00:00.000Z",
        votes: 9,
        votesCumulative: 9877,
      },
      {
        _id: "2023-07-31T00:00:00.000Z",
        votes: 2,
        votesCumulative: 9879,
      },
      {
        _id: "2023-08-01T00:00:00.000Z",
        votes: 28,
        votesCumulative: 9907,
      },
      {
        _id: "2023-08-02T00:00:00.000Z",
        votes: 33,
        votesCumulative: 9940,
      },
      {
        _id: "2023-08-03T00:00:00.000Z",
        votes: 33,
        votesCumulative: 9973,
      },
      {
        _id: "2023-08-04T00:00:00.000Z",
        votes: 38,
        votesCumulative: 10011,
      },
      {
        _id: "2023-08-05T00:00:00.000Z",
        votes: 34,
        votesCumulative: 10045,
      },
      {
        _id: "2023-08-06T00:00:00.000Z",
        votes: 48,
        votesCumulative: 10093,
      },
      {
        _id: "2023-08-07T00:00:00.000Z",
        votes: 49,
        votesCumulative: 10142,
      },
      {
        _id: "2023-08-08T00:00:00.000Z",
        votes: 26,
        votesCumulative: 10168,
      },
      {
        _id: "2023-08-09T00:00:00.000Z",
        votes: 13,
        votesCumulative: 10181,
      },
      {
        _id: "2023-08-10T00:00:00.000Z",
        votes: 10,
        votesCumulative: 10191,
      },
      {
        _id: "2023-08-11T00:00:00.000Z",
        votes: 5,
        votesCumulative: 10196,
      },
      {
        _id: "2023-08-12T00:00:00.000Z",
        votes: 4,
        votesCumulative: 10200,
      },
      {
        _id: "2023-08-13T00:00:00.000Z",
        votes: 1,
        votesCumulative: 10201,
      },
      {
        _id: "2023-08-14T00:00:00.000Z",
        votes: 8,
        votesCumulative: 10209,
      },
      {
        _id: "2023-08-15T00:00:00.000Z",
        votes: 6,
        votesCumulative: 10215,
      },
      {
        _id: "2023-08-16T00:00:00.000Z",
        votes: 4,
        votesCumulative: 10219,
      },
      {
        _id: "2023-08-17T00:00:00.000Z",
        votes: 3,
        votesCumulative: 10222,
      },
      {
        _id: "2023-08-18T00:00:00.000Z",
        votes: 13,
        votesCumulative: 10235,
      },
      {
        _id: "2023-08-19T00:00:00.000Z",
        votes: 5,
        votesCumulative: 10240,
      },
      {
        _id: "2023-08-20T00:00:00.000Z",
        votes: 7,
        votesCumulative: 10247,
      },
      {
        _id: "2023-08-21T00:00:00.000Z",
        votes: 15,
        votesCumulative: 10262,
      },
      {
        _id: "2023-08-22T00:00:00.000Z",
        votes: 8,
        votesCumulative: 10270,
      },
      {
        _id: "2023-08-23T00:00:00.000Z",
        votes: 11,
        votesCumulative: 10281,
      },
      {
        _id: "2023-08-24T00:00:00.000Z",
        votes: 9,
        votesCumulative: 10290,
      },
      {
        _id: "2023-08-29T00:00:00.000Z",
        votes: 1,
        votesCumulative: 10291,
      },
      {
        _id: "2023-08-31T00:00:00.000Z",
        votes: 13,
        votesCumulative: 10304,
      },
      {
        _id: "2023-09-01T00:00:00.000Z",
        votes: 9,
        votesCumulative: 10313,
      },
      {
        _id: "2023-09-02T00:00:00.000Z",
        votes: 4,
        votesCumulative: 10317,
      },
      {
        _id: "2023-09-03T00:00:00.000Z",
        votes: 15,
        votesCumulative: 10332,
      },
      {
        _id: "2023-09-04T00:00:00.000Z",
        votes: 17,
        votesCumulative: 10349,
      },
      {
        _id: "2023-09-05T00:00:00.000Z",
        votes: 47,
        votesCumulative: 10396,
      },
      {
        _id: "2023-09-06T00:00:00.000Z",
        votes: 39,
        votesCumulative: 10435,
      },
      {
        _id: "2023-09-07T00:00:00.000Z",
        votes: 8,
        votesCumulative: 10443,
      },
      {
        _id: "2023-09-13T00:00:00.000Z",
        votes: 17,
        votesCumulative: 10460,
      },
      {
        _id: "2023-09-14T00:00:00.000Z",
        votes: 24,
        votesCumulative: 10484,
      },
      {
        _id: "2023-09-15T00:00:00.000Z",
        votes: 16,
        votesCumulative: 10500,
      },
      {
        _id: "2023-09-16T00:00:00.000Z",
        votes: 24,
        votesCumulative: 10524,
      },
      {
        _id: "2023-09-17T00:00:00.000Z",
        votes: 17,
        votesCumulative: 10541,
      },
      {
        _id: "2023-09-18T00:00:00.000Z",
        votes: 19,
        votesCumulative: 10560,
      },
      {
        _id: "2023-09-19T00:00:00.000Z",
        votes: 13,
        votesCumulative: 10573,
      },
      {
        _id: "2023-09-20T00:00:00.000Z",
        votes: 4,
        votesCumulative: 10577,
      },
      {
        _id: "2023-09-21T00:00:00.000Z",
        votes: 5,
        votesCumulative: 10582,
      },
      {
        _id: "2023-09-22T00:00:00.000Z",
        votes: 9,
        votesCumulative: 10591,
      },
      {
        _id: "2023-09-23T00:00:00.000Z",
        votes: 7,
        votesCumulative: 10598,
      },
      {
        _id: "2023-09-24T00:00:00.000Z",
        votes: 3,
        votesCumulative: 10601,
      },
      {
        _id: "2023-09-25T00:00:00.000Z",
        votes: 74,
        votesCumulative: 10675,
      },
      {
        _id: "2023-09-26T00:00:00.000Z",
        votes: 93,
        votesCumulative: 10768,
      },
      {
        _id: "2023-09-27T00:00:00.000Z",
        votes: 45,
        votesCumulative: 10813,
      },
      {
        _id: "2023-09-28T00:00:00.000Z",
        votes: 52,
        votesCumulative: 10865,
      },
      {
        _id: "2023-09-29T00:00:00.000Z",
        votes: 47,
        votesCumulative: 10912,
      },
      {
        _id: "2023-09-30T00:00:00.000Z",
        votes: 24,
        votesCumulative: 10936,
      },
      {
        _id: "2023-10-01T00:00:00.000Z",
        votes: 10,
        votesCumulative: 10946,
      },
      {
        _id: "2023-10-02T00:00:00.000Z",
        votes: 29,
        votesCumulative: 10975,
      },
      {
        _id: "2023-10-03T00:00:00.000Z",
        votes: 12,
        votesCumulative: 10987,
      },
      {
        _id: "2023-10-04T00:00:00.000Z",
        votes: 11,
        votesCumulative: 10998,
      },
      {
        _id: "2023-10-05T00:00:00.000Z",
        votes: 16,
        votesCumulative: 11014,
      },
      {
        _id: "2023-10-06T00:00:00.000Z",
        votes: 41,
        votesCumulative: 11055,
      },
      {
        _id: "2023-10-07T00:00:00.000Z",
        votes: 32,
        votesCumulative: 11087,
      },
      {
        _id: "2023-10-08T00:00:00.000Z",
        votes: 20,
        votesCumulative: 11107,
      },
      {
        _id: "2023-10-09T00:00:00.000Z",
        votes: 37,
        votesCumulative: 11144,
      },
      {
        _id: "2023-10-10T00:00:00.000Z",
        votes: 71,
        votesCumulative: 11215,
      },
      {
        _id: "2023-10-11T00:00:00.000Z",
        votes: 54,
        votesCumulative: 11269,
      },
      {
        _id: "2023-10-12T00:00:00.000Z",
        votes: 49,
        votesCumulative: 11318,
      },
      {
        _id: "2023-10-13T00:00:00.000Z",
        votes: 41,
        votesCumulative: 11359,
      },
      {
        _id: "2023-10-14T00:00:00.000Z",
        votes: 36,
        votesCumulative: 11395,
      },
      {
        _id: "2023-10-15T00:00:00.000Z",
        votes: 24,
        votesCumulative: 11419,
      },
      {
        _id: "2023-10-16T00:00:00.000Z",
        votes: 42,
        votesCumulative: 11461,
      },
      {
        _id: "2023-10-17T00:00:00.000Z",
        votes: 46,
        votesCumulative: 11507,
      },
      {
        _id: "2023-10-18T00:00:00.000Z",
        votes: 55,
        votesCumulative: 11562,
      },
      {
        _id: "2023-10-19T00:00:00.000Z",
        votes: 28,
        votesCumulative: 11590,
      },
      {
        _id: "2023-10-20T00:00:00.000Z",
        votes: 12,
        votesCumulative: 11602,
      },
      {
        _id: "2023-10-21T00:00:00.000Z",
        votes: 7,
        votesCumulative: 11609,
      },
      {
        _id: "2023-10-22T00:00:00.000Z",
        votes: 16,
        votesCumulative: 11625,
      },
      {
        _id: "2023-10-23T00:00:00.000Z",
        votes: 31,
        votesCumulative: 11656,
      },
      {
        _id: "2023-10-24T00:00:00.000Z",
        votes: 26,
        votesCumulative: 11682,
      },
      {
        _id: "2023-10-25T00:00:00.000Z",
        votes: 13,
        votesCumulative: 11695,
      },
      {
        _id: "2023-10-26T00:00:00.000Z",
        votes: 7,
        votesCumulative: 11702,
      },
      {
        _id: "2023-10-27T00:00:00.000Z",
        votes: 17,
        votesCumulative: 11719,
      },
      {
        _id: "2023-10-28T00:00:00.000Z",
        votes: 10,
        votesCumulative: 11729,
      },
      {
        _id: "2023-10-29T00:00:00.000Z",
        votes: 18,
        votesCumulative: 11747,
      },
      {
        _id: "2023-10-30T00:00:00.000Z",
        votes: 21,
        votesCumulative: 11768,
      },
      {
        _id: "2023-10-31T00:00:00.000Z",
        votes: 24,
        votesCumulative: 11792,
      },
      {
        _id: "2023-11-01T00:00:00.000Z",
        votes: 19,
        votesCumulative: 11811,
      },
      {
        _id: "2023-11-02T00:00:00.000Z",
        votes: 15,
        votesCumulative: 11826,
      },
      {
        _id: "2023-11-03T00:00:00.000Z",
        votes: 36,
        votesCumulative: 11862,
      },
      {
        _id: "2023-11-04T00:00:00.000Z",
        votes: 37,
        votesCumulative: 11899,
      },
      {
        _id: "2023-11-05T00:00:00.000Z",
        votes: 28,
        votesCumulative: 11927,
      },
      {
        _id: "2023-11-06T00:00:00.000Z",
        votes: 18,
        votesCumulative: 11945,
      },
      {
        _id: "2023-11-07T00:00:00.000Z",
        votes: 17,
        votesCumulative: 11962,
      },
      {
        _id: "2023-11-08T00:00:00.000Z",
        votes: 8,
        votesCumulative: 11970,
      },
      {
        _id: "2023-11-09T00:00:00.000Z",
        votes: 6,
        votesCumulative: 11976,
      },
      {
        _id: "2023-11-10T00:00:00.000Z",
        votes: 21,
        votesCumulative: 11997,
      },
      {
        _id: "2023-11-11T00:00:00.000Z",
        votes: 61,
        votesCumulative: 12058,
      },
      {
        _id: "2023-11-12T00:00:00.000Z",
        votes: 23,
        votesCumulative: 12081,
      },
      {
        _id: "2023-11-13T00:00:00.000Z",
        votes: 71,
        votesCumulative: 12152,
      },
      {
        _id: "2023-11-14T00:00:00.000Z",
        votes: 33,
        votesCumulative: 12185,
      },
      {
        _id: "2023-11-15T00:00:00.000Z",
        votes: 21,
        votesCumulative: 12206,
      },
      {
        _id: "2023-11-16T00:00:00.000Z",
        votes: 8,
        votesCumulative: 12214,
      },
      {
        _id: "2023-11-17T00:00:00.000Z",
        votes: 13,
        votesCumulative: 12227,
      },
      {
        _id: "2023-11-18T00:00:00.000Z",
        votes: 14,
        votesCumulative: 12241,
      },
      {
        _id: "2023-11-19T00:00:00.000Z",
        votes: 33,
        votesCumulative: 12274,
      },
      {
        _id: "2023-11-20T00:00:00.000Z",
        votes: 11,
        votesCumulative: 12285,
      },
      {
        _id: "2023-11-21T00:00:00.000Z",
        votes: 12,
        votesCumulative: 12297,
      },
      {
        _id: "2023-11-22T00:00:00.000Z",
        votes: 7,
        votesCumulative: 12304,
      },
      {
        _id: "2023-11-23T00:00:00.000Z",
        votes: 9,
        votesCumulative: 12313,
      },
      {
        _id: "2023-11-24T00:00:00.000Z",
        votes: 16,
        votesCumulative: 12329,
      },
      {
        _id: "2023-11-25T00:00:00.000Z",
        votes: 19,
        votesCumulative: 12348,
      },
      {
        _id: "2023-11-26T00:00:00.000Z",
        votes: 26,
        votesCumulative: 12374,
      },
      {
        _id: "2023-11-27T00:00:00.000Z",
        votes: 26,
        votesCumulative: 12400,
      },
      {
        _id: "2023-11-28T00:00:00.000Z",
        votes: 24,
        votesCumulative: 12424,
      },
      {
        _id: "2023-11-29T00:00:00.000Z",
        votes: 5,
        votesCumulative: 12429,
      },
      {
        _id: "2023-11-30T00:00:00.000Z",
        votes: 9,
        votesCumulative: 12438,
      },
      {
        _id: "2023-12-01T00:00:00.000Z",
        votes: 16,
        votesCumulative: 12454,
      },
      {
        _id: "2023-12-02T00:00:00.000Z",
        votes: 20,
        votesCumulative: 12474,
      },
      {
        _id: "2023-12-03T00:00:00.000Z",
        votes: 15,
        votesCumulative: 12489,
      },
      {
        _id: "2023-12-04T00:00:00.000Z",
        votes: 6,
        votesCumulative: 12495,
      },
      {
        _id: "2023-12-05T00:00:00.000Z",
        votes: 5,
        votesCumulative: 12500,
      },
      {
        _id: "2023-12-06T00:00:00.000Z",
        votes: 10,
        votesCumulative: 12510,
      },
      {
        _id: "2023-12-07T00:00:00.000Z",
        votes: 19,
        votesCumulative: 12529,
      },
      {
        _id: "2023-12-08T00:00:00.000Z",
        votes: 47,
        votesCumulative: 12576,
      },
      {
        _id: "2023-12-09T00:00:00.000Z",
        votes: 26,
        votesCumulative: 12602,
      },
      {
        _id: "2023-12-10T00:00:00.000Z",
        votes: 29,
        votesCumulative: 12631,
      },
      {
        _id: "2023-12-11T00:00:00.000Z",
        votes: 44,
        votesCumulative: 12675,
      },
      {
        _id: "2023-12-12T00:00:00.000Z",
        votes: 38,
        votesCumulative: 12713,
      },
      {
        _id: "2023-12-13T00:00:00.000Z",
        votes: 42,
        votesCumulative: 12755,
      },
      {
        _id: "2023-12-14T00:00:00.000Z",
        votes: 25,
        votesCumulative: 12780,
      },
      {
        _id: "2023-12-15T00:00:00.000Z",
        votes: 13,
        votesCumulative: 12793,
      },
      {
        _id: "2023-12-16T00:00:00.000Z",
        votes: 14,
        votesCumulative: 12807,
      },
      {
        _id: "2023-12-17T00:00:00.000Z",
        votes: 26,
        votesCumulative: 12833,
      },
      {
        _id: "2023-12-18T00:00:00.000Z",
        votes: 12,
        votesCumulative: 12845,
      },
      {
        _id: "2023-12-19T00:00:00.000Z",
        votes: 32,
        votesCumulative: 12877,
      },
      {
        _id: "2023-12-20T00:00:00.000Z",
        votes: 34,
        votesCumulative: 12911,
      },
      {
        _id: "2023-12-21T00:00:00.000Z",
        votes: 33,
        votesCumulative: 12944,
      },
      {
        _id: "2023-12-22T00:00:00.000Z",
        votes: 66,
        votesCumulative: 13010,
      },
      {
        _id: "2023-12-23T00:00:00.000Z",
        votes: 24,
        votesCumulative: 13034,
      },
      {
        _id: "2023-12-24T00:00:00.000Z",
        votes: 29,
        votesCumulative: 13063,
      },
      {
        _id: "2023-12-25T00:00:00.000Z",
        votes: 58,
        votesCumulative: 13121,
      },
      {
        _id: "2023-12-26T00:00:00.000Z",
        votes: 30,
        votesCumulative: 13151,
      },
      {
        _id: "2023-12-27T00:00:00.000Z",
        votes: 31,
        votesCumulative: 13182,
      },
      {
        _id: "2023-12-28T00:00:00.000Z",
        votes: 20,
        votesCumulative: 13202,
      },
      {
        _id: "2023-12-31T00:00:00.000Z",
        votes: 5,
        votesCumulative: 13207,
      },
      {
        _id: "2024-01-01T00:00:00.000Z",
        votes: 7,
        votesCumulative: 13214,
      },
      {
        _id: "2024-01-02T00:00:00.000Z",
        votes: 5,
        votesCumulative: 13219,
      },
      {
        _id: "2024-01-03T00:00:00.000Z",
        votes: 11,
        votesCumulative: 13230,
      },
      {
        _id: "2024-01-04T00:00:00.000Z",
        votes: 8,
        votesCumulative: 13238,
      },
      {
        _id: "2024-01-05T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13240,
      },
      {
        _id: "2024-01-14T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13241,
      },
      {
        _id: "2024-01-21T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13242,
      },
      {
        _id: "2024-01-27T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13243,
      },
      {
        _id: "2024-01-30T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13245,
      },
      {
        _id: "2024-02-01T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13247,
      },
      {
        _id: "2024-02-06T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13249,
      },
      {
        _id: "2024-02-09T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13250,
      },
      {
        _id: "2024-02-12T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13251,
      },
      {
        _id: "2024-02-28T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13252,
      },
      {
        _id: "2024-03-05T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13255,
      },
      {
        _id: "2024-03-11T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13256,
      },
      {
        _id: "2024-03-17T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13258,
      },
      {
        _id: "2024-03-22T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13259,
      },
      {
        _id: "2024-04-02T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13260,
      },
      {
        _id: "2024-04-09T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13261,
      },
      {
        _id: "2024-04-15T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13262,
      },
      {
        _id: "2024-04-26T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13264,
      },
      {
        _id: "2024-05-06T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13265,
      },
      {
        _id: "2024-05-11T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13266,
      },
      {
        _id: "2024-05-14T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13268,
      },
      {
        _id: "2024-05-20T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13269,
      },
      {
        _id: "2024-05-27T00:00:00.000Z",
        votes: 5,
        votesCumulative: 13274,
      },
      {
        _id: "2024-05-30T00:00:00.000Z",
        votes: 8,
        votesCumulative: 13282,
      },
      {
        _id: "2024-06-03T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13283,
      },
      {
        _id: "2024-06-05T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13286,
      },
      {
        _id: "2024-06-11T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13288,
      },
      {
        _id: "2024-06-14T00:00:00.000Z",
        votes: 5,
        votesCumulative: 13293,
      },
      {
        _id: "2024-06-24T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13295,
      },
      {
        _id: "2024-06-26T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13297,
      },
      {
        _id: "2024-07-04T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13298,
      },
      {
        _id: "2024-07-09T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13301,
      },
      {
        _id: "2024-07-12T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13302,
      },
      {
        _id: "2024-07-19T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13303,
      },
      {
        _id: "2024-07-22T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13304,
      },
      {
        _id: "2024-07-24T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13305,
      },
      {
        _id: "2024-07-29T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13307,
      },
      {
        _id: "2024-08-05T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13308,
      },
      {
        _id: "2024-08-06T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13309,
      },
      {
        _id: "2024-08-09T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13311,
      },
      {
        _id: "2024-08-15T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13312,
      },
      {
        _id: "2024-08-19T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13313,
      },
      {
        _id: "2024-08-20T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13314,
      },
      {
        _id: "2024-08-22T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13317,
      },
      {
        _id: "2024-08-24T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13321,
      },
      {
        _id: "2024-08-26T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13323,
      },
      {
        _id: "2024-08-28T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13324,
      },
      {
        _id: "2024-08-29T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13325,
      },
      {
        _id: "2024-08-31T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13326,
      },
      {
        _id: "2024-09-01T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13329,
      },
      {
        _id: "2024-09-02T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13330,
      },
      {
        _id: "2024-09-04T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13331,
      },
      {
        _id: "2024-09-07T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13333,
      },
      {
        _id: "2024-09-09T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13335,
      },
      {
        _id: "2024-09-14T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13336,
      },
      {
        _id: "2024-09-18T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13340,
      },
      {
        _id: "2024-09-20T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13343,
      },
      {
        _id: "2024-09-22T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13346,
      },
      {
        _id: "2024-09-27T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13350,
      },
      {
        _id: "2024-09-30T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13354,
      },
      {
        _id: "2024-10-03T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13355,
      },
      {
        _id: "2024-10-07T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13357,
      },
      {
        _id: "2024-10-12T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13359,
      },
      {
        _id: "2024-10-14T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13363,
      },
      {
        _id: "2024-10-21T00:00:00.000Z",
        votes: 4,
        votesCumulative: 13367,
      },
      {
        _id: "2024-10-22T00:00:00.000Z",
        votes: 10,
        votesCumulative: 13377,
      },
      {
        _id: "2024-10-23T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13378,
      },
      {
        _id: "2024-10-24T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13379,
      },
      {
        _id: "2024-10-27T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13380,
      },
      {
        _id: "2024-10-31T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13382,
      },
      {
        _id: "2024-11-03T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13383,
      },
      {
        _id: "2024-11-04T00:00:00.000Z",
        votes: 1,
        votesCumulative: 13384,
      },
      {
        _id: "2024-11-08T00:00:00.000Z",
        votes: 2,
        votesCumulative: 13386,
      },
      {
        _id: "2024-11-11T00:00:00.000Z",
        votes: 3,
        votesCumulative: 13389,
      },
      {
        _id: "2024-11-13T00:00:00.000Z",
        votes: 5,
        votesCumulative: 13394,
      },
    ],
  });
});

module.exports = router;
