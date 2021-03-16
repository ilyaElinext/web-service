'use strict';

const express = require('express');
const fs = require("fs");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

// let jsonData = require('./resource/student.json');

const app = express();
app.get('/', (req, res) => {
    try {
        const jsonString = fs.readFileSync("./resource/student.json");
        const customer = JSON.parse(jsonString);
        res.send(customer);
    } catch (err) {
        console.log(err);
        return;
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);