const HDWalletProvider = require('@truffle/hdwallet-provider');
const  {Web3} = require('web3');
const {interface, bytecode} = require('./compile');
const mnemonicAccount = process.env.MNEMONIC_ACCOUNT;
const urlSepolia = process.env.URL_SEPOLIA;


const provider = new HDWalletProvider(mnemonicAccount, urlSepolia);
