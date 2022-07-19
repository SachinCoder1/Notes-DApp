const { ethers } = require("hardhat");

const networkConfig = {
  4: {
    name: "rinkeby",
    callbackGasLimit: "500000",
},
  31337: {
    name: "hardhat",
    callbackGasLimit: "500000",

  },
};

const developmentChains = ["hardhat", "localhost"];
module.exports = { networkConfig, developmentChains };
