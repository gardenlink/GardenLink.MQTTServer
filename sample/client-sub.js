//Ejemplo de cliente subscriptor MQTT

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
 
client.on('connect', function () {
  //client.subscribe('/demo/D001/status');
  client.subscribe('/demo/B001/S1/client');
  console.log('connected');
 
client.on('message', function (topic, message) {
  console.log(message.toString());
  client.end();
  });
});