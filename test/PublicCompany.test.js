const PublicCompany = require("../lib/PublicCompany");
const axios = require("axios");

jest.mock("axios");

const companyConfig = {
  ticker: "AAPL",
  api: "financial modeling prep"
}

// public company class
describe("PublicCompany", () => {
  describe("Init", () => {
    it("should take in a company ticker and create a company object", () => {
      // arrange/act
      const publicCompany = new PublicCompany(companyConfig)
      
      // assert
      // object
      expect(typeof publicCompany === "object").toBe(true);

      // property of ticker
      expect("ticker" in publicCompany).toBe(true)
      expect("api" in publicCompany).toBe(true)
      expect("quotes" in publicCompany).toBe(true)
      
      // correct ticker assigned
      expect(publicCompany.ticker).toBe(companyConfig.ticker);
      expect(publicCompany.api).toBe(companyConfig.api);
      expect(publicCompany.quotes instanceof Array).toBe(true);
    })

    it("should have a quotes array with a quote fetched from the api", () => {
      // arrange/act
      const publicCompany = new PublicCompany(companyConfig)
      // assert
      expect(publicCompany.quotes instanceof Array).toBe(true);
    })
  })

  describe("getTicker", () => {
    it("should return the ticker", () => {
      const publicCompany = new PublicCompany(companyConfig);
      
      const ticker = publicCompany.getTicker();

      expect(ticker).toBe("AAPL");
    })
  })

  describe("getQuote", () => {
    it("should return the ticker", () => {
      const publicCompany = new PublicCompany(companyConfig);
      
      const ticker = publicCompany.getTicker();

      expect(ticker).toBe("AAPL");
    })
  })

  describe("getValuation", () => {
    it("should return a valuation", async () => {
      const publicCompany = new PublicCompany(companyConfig);
      const response = {
        data: {
          dcf: 300
        }
      }
      axios.get.mockResolvedValue(response);

      const dcf = await publicCompany.getValuation("dcf");

      expect(dcf).toBe(300);

      return;
    })
  })

  describe("Display Stats", () => {
    it("should display the company's stats", () => {
      const publicCompany = new PublicCompany(companyConfig);
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      publicCompany.displayStats();

      expect(mock).toBeCalledWith("AAPL");
    })
  })
})