var ponte = require("ponte");
var opts = require("./config.js");

var server = ponte(opts);

server.on("updated", function(resource, buffer) {
  console.log("Resource Updated", resource, buffer);
});
