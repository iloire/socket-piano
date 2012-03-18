var config = require("../../config").values
var util = require("./util")

function createPiano(server){
	var io = require('socket.io').listen(server);
	var socket = io.sockets;
	var clients = {} //id (int) : client (obj)
	var sessions = [] //array of client id's
	var scores = {}
	var history = [];
	var hall_of_fame = [];

	function broadcast(sessions, command, data){
		for (var i=0, l=sessions.length; i < l ; i++) {			
			clients[sessions[i]].emit(command, data);
		};
	}

	socket.on('connection', function (client) {

		client.on('join', function (data) {
			util.add (sessions, client.id); //add client id to list of sessions
			clients[client.id] = client;  //store specific client object
		});

		client.on('tone', function (data) {
			broadcast (sessions, 'tone', data.tone);
		});
	});
}
exports.createPiano = createPiano;
