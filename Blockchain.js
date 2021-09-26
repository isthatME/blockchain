const Block = require('./Block');
 
 class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }
    createGenesisBlock() {
        return new Block(0, "23/04/1997", "Genesis block", "0");
    }
    getLastestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.previousHash = this.getLastestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calcHash() || currentBlock.previousHash !== previousBlock.hash) return false;
        }
        return true;
    }
}
module.exports = Blockchain;