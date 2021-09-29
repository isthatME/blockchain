const SHA256 = require(`crypto-js/sha256`)

class Block {
    constructor(index, timeStamp, data, previousHash = ``) {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calcHash();
    }
    calcHash() {
        return SHA256(this.index + this.previousHash + this.timeStamp +  JSON.stringify(this.data) + this.nonce).toString();
    }
    mineBlock(difficulty) {
        console.log(`\nMinerando Block ${this.index}...`);
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calcHash();
        }
        console.log(`Block minerado!`);

        console.log(`\n* Block ${this.index}:`)
        console.log(`Nonce: ${this.nonce}`);
        console.log(`Hash: ${this.hash}`);
        console.log(`Hash Anterior: ${this.previousHash}`);
    }
}

module.exports = Block;
