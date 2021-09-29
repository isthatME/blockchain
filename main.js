const Block = require('./Block');
const Blockchain = require('./Blockchain');

let bitcoin = new Blockchain(4);

for (let i = 1; i <= 5; i++) {
    bitcoin.addNewBlock(bitcoin.createGenesisBlock());
    bitcoin.addNewBlock(new Block(i, new Date(), { amount: i * 2 }));
}

// retorn a validade de uma blockChain
if (bitcoin.isChainValid()) {
    console.log('\nA Blockchain é válida!')
} else {
    console.log('\nA Blockchain é inválida!')
}

// dados a serem exibidos
console.log('\n' + JSON.stringify(bitcoin, null, 4));
