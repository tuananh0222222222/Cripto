const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index , timestamp, data, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256 = (this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class BlockChain {
    constructor (){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0 , "01/01/2017", "Genesis Block" ,0);
    }

    GetLatestBlock() {
        return this.chain[this.chain.length -1];
    }

    AddBlock(newBlock){
        newBlock.previousHash= this.GetLatestBlock().hash;
        newBlock.hash= newBlock.calculateHash();
        this.chain.push(newBlock)
    }
}

let savjjecoin = new BlockChain();
savjjecoin.AddBlock(new Block(1 , "10/07/2017", {amount : 4}));
savjjecoin.AddBlock(new Block(2 , "12/07/2017", {amount : 10}));

console.log(JSON.stringify(savjjecoin, null ,4));