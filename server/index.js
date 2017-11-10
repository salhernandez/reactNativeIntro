const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const pusherConfig = require('./pusher.json'); // (1)

const app = express(); // (2)
 const pusher = new Pusher(pusherConfig);


   app.set('port', (process.env.PORT || 5000));
   app.use(bodyParser.json());

  //  app.put('/users/:name', function(req, res) { // (3)
  //      console.log('User joined: ' + req.params.name);
  //      pusherClient.trigger('chat_channel', 'join', {
  //          name: req.params.name
  //      });
  //      res.sendStatus(204);
  //  });
   //
  //  app.delete('/users/:name', function(req, res) { // (4)
  //      console.log('User left: ' + req.params.name);
  //      pusherClient.trigger('chat_channel', 'part', {
  //          name: req.params.name
  //      });
  //      res.sendStatus(204);
  //  });
   //
  //  app.post('/users/:name/messages', function(req, res) { // (5)
  //      console.log('User ' + req.params.name + ' sent message: ' + req.body.message);
  //      pusherClient.trigger('chat_channel', 'message', {
  //          name: req.params.name,
  //          message: req.body.message
  //      });
  //      res.sendStatus(204);
  //  });
  app.get('/', function (req, res) {
   res.send('Hello World');
})
  app.get('/chat/:chat', function(req,res){
  const chat_data = JSON.parse(req.params.chat);
pusher.trigger('chat_channel', 'new-message', {chat:chat_data});
  console.log(chat_data)
//  pusher.trigger('chat_channel', 'new-message', {sender:'John',message:'help'})
res.send('You have hit chat endpoint')


});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
