const express = require('express');
const app = express();
app.listen(3030, () => console.log('Server running'));
const cors = require('cors');
app.use(cors());

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: '...',
  consumer_secret: '...',
  access_token_key: '...',
  access_token_secret: '...'
});

app.get('/api/home', (req, res) => {
  const params = { tweet_mode: 'extended', count: 200 };
  client
    .get(`statuses/home_timeline`, params)
    .then(timeline => {
      res.send(timeline);
      console.log("request received");
    })
    .catch(error => res.send(error));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
});



