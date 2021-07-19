/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.4.24",
  networks: {
    bsc: {
      url: process.env.BSC_RPC,
      chainId: 56,
      accounts: {mnemonic: process.env.MNEMONIC},
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_RPC,
      chainId: 97,
      accounts: {mnemonic: process.env.MNEMONIC},  
    },
    matic: {
      url: process.env.MATIC_RPC,
      chainId: 137,
      accounts: {mnemonic: process.env.MNEMONIC},  
    },
    matic_testnet: {
      url: process.env.MATIC_TESTNET_RPC,
      chainId: 80001,
      accounts: {mnemonic: process.env.MNEMONIC},  
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  },
};
