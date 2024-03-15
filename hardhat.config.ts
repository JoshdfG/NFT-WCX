import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */

//URL from alchemy
const URL = process.env.URL;

//private of the wallet
const KEY = process.env.PRIVATE_KEY;

const POLYGON_SCAN_API_KEY = process.env.POLYGON_SCAN_API_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: URL,
      accounts: [KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_SCAN_API_KEY,
  },
};
// 0xa0b077B9EaB8615BEc8264d4Ed81167B621074Da
// - https://mumbai.polygonscan.com//address/0xa0b077B9EaB8615BEc8264d4Ed81167B621074Da#code
