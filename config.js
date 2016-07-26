var path   = require ('path');

module.exports = {
  logger: {
    level: 'info'
  },
  http: {
    port: 3000 // tcp
  },
  mqtt: {
    port: 1883 // tcp
  },
  coap: {
    port: 3000 // udp
  },
  persistence: {
    type: 'level',
    path: path.join(path.resolve(__dirname),"db")
  }

};
