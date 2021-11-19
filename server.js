const express = require('express');
var bodyParser = require('body-parser');
//const { App } = require('@slack/bolt');

const port = process.env.PORT || 3000
const app = express()

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.post('/', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
 });

app.post('/welcome', function(req,res){
    console.log(req.body);
    var data = req.body;
    welcomeUser(res);
});

app.post('/interaction', function(req,res){
    console.log(req.body.payload);
    var data = JSON.parse(req.body.payload);
    if (data.callback_id && data.callback_id == "my_feeling") feeling(res);
    else if (data.callback_id && data.callback_id == "my_hobbies") hobbies(res);
    else return res.status(200).send("wrong entry");
});

async function welcomeUser (res){
    let message = {
        "text": "how are you doing?",
        "response_type": "in_channel",
        "attachments": [
            {
                "text": "How are you doing?",
                "fallback": "How are you doing?",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "callback_id": "my_feeling",
                "actions": [
                    {
                        "name": "greeting",
                        "text": "Pick a response...",
                        "type": "select",
                        "options": [
                            {
                                "text": "Doing well",
                                "value": "well"
                            },
                            {
                                "text": "Neutral",
                                "value": "neutral"
                            },
                            {
                                "text": "Feeling lucky",
                                "value": "lucky"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    return res.status(200).json(message);
}

async function feeling (res){
    let message = {
        "text": "What are your favorite hobbies?",
        "response_type": "in_channel",
        "attachments": [
            {
                "text": "What are your favorite hobbies?",
                "fallback": "What are your favorite hobbies?",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "callback_id": "my_hobbies",
                "actions": [
                    {
                        "name": "hobbies",
                        "text": "Pick a response...",
                        "type": "select",
                        "options": [
                            {
                                "text": "Football",
                                "value": "football"
                            },
                            {
                                "text": "Music",
                                "value": "music"
                            },
                            {
                                "text": "Sleep",
                                "value": "sleep"
                            },
                            {
                                "text": "Movies",
                                "value": "movies"
                            },
                            {
                                "text": "Basketball",
                                "value": "basketball"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    return res.status(200).json(message);
}

async function hobbies (res){

}
// Starts server
app.listen(port, function() {
    console.log('Bot is listening on port ' + port)
})