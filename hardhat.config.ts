import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import * as dotenv from 'dotenv';

dotenv.config();

const { API_URL, PRIVATE_KEY } = process.env;

if (!API_URL || !PRIVATE_KEY) {
  throw new Error('Please set API_URL and PRIVATE_KEY in your .env file');
}

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  defaultNetwork: "lisk-sepolia",
  networks: {
    hardhat: {},
    "lisk-sepolia": {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000, // Adjusted gas limit to a more reasonable value
      gasPrice: 8000000000, // Adjusted gas price to a more reasonable value
      chainId: 4202,
    }
  },
};

export default config;
