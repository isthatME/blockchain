const Block = require('./Block')
const Blockchain = require('./Blockchain') 


let bitcoin = new Blockchain();
console.log('mining block 1');
bitcoin.addNewBlock(new Block(1, new Date(), { amount: 4 }));
console.log('mining block 2');
bitcoin.addNewBlock(new Block(2, new Date(), { amount: 10 }));


// dados a serem exibidos
// console.log(JSON.stringify(bitcoin, null, 4));

// retorn a validade de uma blockChain
// console.log(bitcoin.isChainValid());