const Web3 = require('web3');
const Block = require('in3-common').Block;
let argv = require('minimist')(process.argv.slice(2), { string: ['from', 'to'] });

let selectedHost = 'https://node1.e3t.co/rpcapi';
let web3 = new Web3(new Web3.providers.HttpProvider(selectedHost));

if (typeof argv.verifyblock !== 'undefined') {
    console.log('[e3net][verifyBlock] Block No: ' + argv.verifyblock);
    web3.eth.getBlock(argv.verifyblock).then(function (blockObject) {
        console.log('[e3net][verifyBlock] Response: ', blockObject);
        var block = new Block(blockObject);

        console.log('[e3net][verifyBlock] block: ', block);

        console.log('[e3net][verifyBlock] Block Hash: 0x' + block.hash().toString('hex'));

    });

    return
}
console.log('[e3net] end.');