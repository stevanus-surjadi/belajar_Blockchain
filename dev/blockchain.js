/*
class Blockchain {
    constructor() {
        this.chain = [];
        this.newTransaction = [];
    }

    //..Testing Command Git Sync
    //..Testing Git branch
}
*/

const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1');

function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    //Genesis Block
    this.createNewBlock(100, '000', '000');
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash)
{
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient)
{
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionId: uuid().split('-').join('')
    };

    return newTransaction;
}

Blockchain.prototype.addTransactionToPendingTransaction = function(transactionObj)
{
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash =  sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0,4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        //console.log(hash);
    }
    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain){
    let validChain = true;

    for(var i = 1; i < blockchain.length; i++)
    {
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i - 1];
        const blockHash = this.hashBlock(prevBlock['hash'],)

        if(currentBlock['previousBlockHash'] !== prevBlock['hash']) validChain = false;

    }

    return validChain;
    
}


module.exports = Blockchain;