const express = require('express')
const app = express()
var os = require("os");
app.listen(5000)
app.get('', (req, res) => {res.send((os.hostname()))})