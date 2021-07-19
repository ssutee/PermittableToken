const { web3 } = require("hardhat");
const { default: BigNumber } = require("bignumber.js");
const PermittableToken = artifacts.require("PermittableToken");

require("dotenv").config();

async function main() {
  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];

  console.log("Deploying contracts with the account:", deployer);
  let balance = new BigNumber(await web3.eth.getBalance(deployer));
  console.log("Account balance:", balance.div(1e18).toString(), "Native Token");

  const token = await PermittableToken.new(
    process.env.TOKEN_NAME,
    process.env.TOKEN_SYMBOL,
    process.env.TOKEN_DECIMALS,
    process.env.TOKEN_CHAIN_ID,
  );

  console.log("Token address:", token.address);
  console.log("Token name:", await token.name());
  console.log("Token symbol:", await token.symbol());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
