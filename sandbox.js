const express = require('express')
const app = express()
const port = 8080
var os = require("os");
app.listen(port)
app.get('', (req, res) => {res.send((os.hostname()))})
