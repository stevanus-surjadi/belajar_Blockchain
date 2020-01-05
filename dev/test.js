const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//console.log(bitcoin);
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
//console.log(bitcoin);

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1578201564532,
    "transactions": [],
    "nonce": 100,
    "hash": "000",
    "previousBlockHash": "000"
    },
    {
    "index": 2,
    "timestamp": 1578201833181,
    "transactions": [],
    "nonce": 95286,
    "hash": "00003fd120119fd54b3b37eb3bd5feed2b8def2a6848a800d43180e192bee0aa",
    "previousBlockHash": "000"
    },
    {
    "index": 3,
    "timestamp": 1578201922212,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "0000",
    "recipient": "efe243402f7a11ea9ad9bf4e28c52e81",
    "transactionId": "900d12002f7b11ea9ad9bf4e28c52e81"
    },
    {
    "amount": 100,
    "sender": "MS73SHJKD283MIEHBAKA71652",
    "recipient": "HYHDHAKLYET167893S9DCXC893"
    },
    {
    "amount": 300,
    "sender": "MS73SHJKD283MIEHBAKA71652",
    "recipient": "HYHDHAKLYET167893S9DCXC893"
    },
    {
    "amount": 200,
    "sender": "MS73SHJKD283MIEHBAKA71652",
    "recipient": "HYHDHAKLYET167893S9DCXC893"
    },
    {
    "amount": 500,
    "sender": "MS73SHJKD283MIEHBAKA71652",
    "recipient": "HYHDHAKLYET167893S9DCXC893"
    }
    ],
    "nonce": 22679,
    "hash": "0000b8f9527547dba5fdff0dfff3eec340d7f6b337d47f6588916bb463e056a8",
    "previousBlockHash": "00003fd120119fd54b3b37eb3bd5feed2b8def2a6848a800d43180e192bee0aa"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "0000",
    "recipient": "efe243402f7a11ea9ad9bf4e28c52e81",
    "transactionId": "c5145b702f7b11ea9ad9bf4e28c52e81"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

console.log('Valid: ', bitcoin.chainIsValid(bc1.chain));
