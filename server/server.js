//Requires and Declarations
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
//Uses
app.use(bodyParser.json());
app.use(express.static('server/public'));
//Spin
app.listen(PORT, ()=>{
    console.log('Server running on port', PORT);
});