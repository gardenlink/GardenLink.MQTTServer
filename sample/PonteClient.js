var method = PonteClient.prototype;
var req = require('restler');
var _address;
var _opt;
var _DEBUG = false;
var _MOCK = true;  //Para solo emular las respuestas de arduino en modo local


function PonteClient(address, port, opt) 
{
   
   if (_port)
   		this._address = address + ":" + port;
   else
   		this._address = address;		
   
   this._opt = opt; //no usado por ahora
   
   if (_opt.Debug) 
   	_DEBUG = _opt.Debug;
   	
   if (_opt.Mock)
   	_MOCK = _opt.Mock;
}

  
  method.publicar = function(topic, payload, callback) {
    var url = 'http://' + this._address + /resources/' + topic;
    if (_DEBUG)
    	console.log(url);
    req.post(url, {
    	//data: { id: 334 }
    	data : { payload }
    }).on('complete', function(data) {
    	if (data instanceof Error) {
    		if (_DEBUG)
    			console.log("Error al llamar funcion en arduino, Error : " + data);
    		return callback(data, null);
    	}
    	else
    	{
    		return callback(null, data);
    		
    	}
    }).on('error', function(error, response) { 
    	console.log("Arest -> Error: " + error);
    	return callback(error, null);
    });
  };
  
  method.leer = function(topic, callback) {
    var url = 'http://' + this._address + /resources/' + topic;
    if (_DEBUG)
    	console.log(url);
    req.get(url).on('complete', function(data) {
    	if (data instanceof Error) {
    		if (_DEBUG)
    			console.log("Error al llamar funcion en arduino, Error : " + data);
    		return callback(data, null);
    	}
    	else
    	{
    		return callback(null, data);
    	}
    }).on('error', function(error, response) { 
    	console.log("Arest -> Error: " + error);
    	return callback(error, null);
    });
  };

