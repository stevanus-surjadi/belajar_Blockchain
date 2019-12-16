const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
//Send back the entire blockchain
app.get('/blockchain', function (req, res) {
  //res.send('Hello World');
  res.send(bitcoin);
})

//Create new transaction
app.post('/transaction', function(req, res){
    //console.log(req.body);
    //res.send(`The amount of the transactionis ${req.body.amount} bitcoin`);
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`});
})

//Create a new block for us
app.get('/mine', function(req, res){
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }

    bitcoin.createNewTransaction(12.5, "00FE", nodeAddress);

    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
    const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash,hash);

    res.json({ 
        note: "New block minedsuccessfully",
        block: newBlock
    });
});
 
//Register a node and broadcast it to the network
app.post('/register-and-broadcast-node',function(req, res){
    const newNodeUrl = req.body.newNodeUrl;
    if(bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl);

    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        //register-node
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl},
            json: true
        };
        
        regNodesPromises.push(rp(requestOptions));

    });

    Promise.all(regNodesPromises)
    .then(data => {
        const bulkRegisterOptions = {
            uri: newNodeUrl + '/register-nodes-bulk',
            method: 'POST',
            body: { allNetworkNodes: [ ...bitcoin.networkNodes, bitcoin.currentNodeUrl ]},
            json: true
        };

        return rp(bulkRegisterOptions);
    })

    .then(data => {
        res.json({ note: 'New node registered with network successfully' });
    })

});

//Register a node with the network
app.post('/register-node', function(req, res){
    const newNodeUrl =  req.body.newNodeUrl;
    const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(newNodeUrl) == -1;
    const notCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl;
    
    if(nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(newNodeUrl);

    res.json({ note: 'New node registered successfully.'})
})

//Register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res){
    const  allNetworkNodes = req.body.allNetworkNodes;
    
    allNetworkNodes.forEach(networkNodeUrl=> {
        const nodeNotAlreadyPresent = bitcoin.networkNodes.indexOf(networkNodeUrl) == -1;
        const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl;
        if(nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(networkNodeUrl);
    });

    res.json({ note: 'Bulk registration successful.'})
})





app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
})