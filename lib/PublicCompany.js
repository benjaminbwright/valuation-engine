require("dotenv").config();
const axios = require("axios");

class PublicCompany {
  constructor({ 
    ticker,
    api
  }) {
    this.ticker = ticker;
    this.api = api;
    this.quotes = [];
  }

  getTicker() {
    return this.ticker;
  }

  async getValuation(method) {
    const { data: {
        dcf
      } 
    } = await axios.get(`https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/SBUX?apikey=${process.env.FMP_KEY}`);
    
    return dcf;
  }

  displayStats() {
    console.log(this.ticker)
  }
}

module.exports = PublicCompany;