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


### Configurar

Modificar archivo config.js (los puertos son los por defecto y la base de datos es levelup)

    module.exports = {
      logger: {
        level: `info`
      },
      http: {
        port: 3000
      },
      mqtt: {
        port: 1883
      },
      coap: {
        port: 3000
      },
      persistence: {
        type: `level`,	
        path: `./db`	
      }

    };

### Versiones compatibles

Probado en:
	Windows 10 con node 4.3.0 y npm 2.3.0
    Raspibian con node 4.0.0 y npm 2.14.2
    
El modulo Ponte no funciona en:
	Linux Mint 17 xfce 64-bit con node 0.10.25 y npm 1.3.10
    
    




