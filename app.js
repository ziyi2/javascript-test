const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
console.log('server start at http://localhost:3000');
app.listen(3000);