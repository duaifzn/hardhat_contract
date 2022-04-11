"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
(async () => {
    try {
        const ProofOfExistence = await hardhat_1.ethers.getContractFactory('ProofOfExistence');
        const proofOfExistence = await ProofOfExistence.deploy();
        await proofOfExistence.deployed();
        console.log("ProofOfExistence deployed to:", proofOfExistence.address);
    }
    catch (err) {
        console.log(err);
    }
})();
