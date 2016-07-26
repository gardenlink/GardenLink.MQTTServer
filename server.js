var ponte = require("ponte");
var opts = require("./config.js");

var server = ponte(opts);

console.log("Iniciando Servidor MQTT");
console.log("Directorio de almacenamiento de archivos de datos");
console.dir(opts.persistence.path);

server.on("updated", function(resource, buffer) {
  console.log("Resource Updated", resource, buffer);
});
