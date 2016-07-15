## GardenLink.MQTTServer

Implementacion del broker PONTE

### Instalar:

git clone https://github.com/gardenlink/GardenLink.MQTTServer.git

cd GardenLink.MQTTServer

npm install


### Iniciar:

node server.js



### Uso:


**Publicar Informacion usando MQTT desde Node:**

    var mqtt    = require(`mqtt`);
    var client  = mqtt.connect(`mqtt://localhost`);

    client.on(`connect`, function () {
    client.publish(`hello`, `Hello!`, {retain: true, qa: 1});
    client.end();
    });

### Leer Informacion usando MQTT desde Node:
		
    var mqtt    = require(`mqtt`);
    var client  = mqtt.connect(`mqtt://localhost`);

    client.on(`connect`, function () {
    client.subscribe(`hello`);
    console.log(`connected`);

    client.on(`message`, function (topic, message) {
    console.log(message.toString());
    client.end();
    });
    });
        

### Publicar Informacion usando HTTP:

curl -X PUT -d 'world' http://localhost:3000/resources/hello

### Leer Informacion usando HTTP:

curl http://localhost:3000/resources/hello





