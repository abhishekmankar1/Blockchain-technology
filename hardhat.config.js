require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20", // Match the Solidity version with your contracts
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545", // Ensure this matches Ganache’s URL
      accounts: [/* Insert your private key or leave as Ganache default */]
    },
  },
};
