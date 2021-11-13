const express = require('express');
const bodyParser = require('body-parser');
const { App } = require('@slack/bolt');

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/welcome', (req,res)=>{
    console.log(req.body.text);
    return res.status(200).send('Welcome. How are you doing?');
});
// Starts server
app.listen(port, function() {
    console.log('Bot is listening on port ' + port)
})