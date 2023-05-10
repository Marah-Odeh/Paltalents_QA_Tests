// Create connection to database
const config = {
  user: "asal-training",
  password: "Aladdin@2021",
  server: "asal-summer-training.database.windows.net",
  database: "paltalents",
  options: {
    trustedConnection: true,
    enableArithPort: true,
  },
};

module.exports = config;
