//Ejemplo de cliente publicador MQTT

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
 
client.on('connect', function () {
  client.publish('hello', 'Hello!', {retain: true, qa: 1});
client.end();
});