var ponte = require("ponte");
var opts = require("./config.js");

var server = ponte(opts);

console.log("Iniciando Servidor MQTT");
console.log("Directorio de almacenamiento de archivos de datos");
console.log((process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + "/db");

server.on("updated", function(resource, buffer) {
  console.log("Resource Updated", resource, buffer);
});
