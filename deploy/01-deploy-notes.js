const {network} = require('hardhat');
const {developmentChains} = require('../helper-hardhat-config');
const {verify} = require('../utils/verify');

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    log("Started deploying Notes Contract ------------------------------------");
    
    const args = [];
    const notes = await deploy("Notes", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying-----------------------------------------");
        await verify(notes.address, arguments);

    }

    log("Deployment Done --------------------------------------------------")

}

module.exports.tags = ["all", "notes", "main"]