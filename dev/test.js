const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

console.log(bitcoin);
/*
const previousBlockHash = 'LKJHFASDUFIO9837422934REWIHFD9284';
const currentBlockData = [
    {
        amount: 20,
        sender: 'LSKJFHAF934243J',
        recipient: '09433NJHR2OUR32ORN'
    },
    {
        amount: 55,
        sender: 'KJADKJNC39283KJK',
        recipient: 'ASDFSDLKJF8R293473'
    },
    {
        amount: 11,
        sender: 'WFLKSALNCHR48C5Y375219843',
        recipient: '12983789023745JLKJFSAKFA'
    }
];
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 32142));
*/


/*
bitcoin.createNewBlock(213214,'ASDKLHFL123WEQ','0192373QJHJAHD');

bitcoin.createNewTransaction(100,'AddressSenderWalletCode','AddressRecipientWalletCode');

bitcoin.createNewBlock(4212, '0192373QJHJAHD','M98312KHJDFS');

bitcoin.createNewTransaction(1,'AddressSenderWalletCode','AddressRecipientWalletCode');
bitcoin.createNewTransaction(10,'AddressSenderWalletCode','AddressRecipientWalletCode');
bitcoin.createNewTransaction(300,'AddressSenderWalletCode','AddressRecipientWalletCode');

bitcoin.createNewBlock(98612,'M98312KHJDFS','LKSAJDD9KWLI321');
*/

//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

//console.log(bitcoin.createNewTransaction(100,'AddressSenderWalletCode','AddressRecipientWalletCode'));
console.log(bitcoin);
