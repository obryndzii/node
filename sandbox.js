'use strict';
const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0';
var os = require("os");
app.listen(port)
app.get('', (req, res) => {res.send((os.hostname()))})
console.log(`Running on http://${host}:${port}`);
