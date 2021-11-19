const express = require('express');
const bodyParser = require('body-parser');
const { App } = require('@slack/bolt');

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/welcome', (req,res)=>{
    let message = {
        "text": "how are you doing?",
        "response_type": "in_channel",
        "attachments": [
            {
                "text": "How are you doing?",
                "fallback": "How are you doing?",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "callback_id": "game_selection",
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
    console.log(req.body.text);
    return res.status(200).json(message);
});
// Starts server
app.listen(port, function() {
    console.log('Bot is listening on port ' + port)
})