const express = require('express');

const productsGrpcClient = require("./client");

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
    
    productsGrpcClient.getAll(null, (err, data) => {
        res.send(data);
    });
});

app.listen('3001', () => {
    console.log('Products rest client started on port 3001');
})

