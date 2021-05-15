require("dotenv").config();
// DEPS
const PublicCompany = require("./lib/PublicCompany");

// DATA

// FUNCTIONS
const init = async () => {
  const publicCompany = new PublicCompany("AAPL");
  console.log(await publicCompany.getValuation("dcf"));
}
// USER INTERACTIONS

// INIT
init();