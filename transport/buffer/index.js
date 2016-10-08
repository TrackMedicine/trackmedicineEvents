let firebaseClient = require("firebase");
let config = require('../../config/').firebase

function firebase() {
	firebaseClient.initializeApp({
	  databaseURL: config.credential,
	  serviceAccount: config.file
	});
}

function save(data){
	firebaseClient.database().ref('events').push(data)
}

exports.event = firebase
exports.firebaseCli = firebaseClient
exports.store = function(data) { 
	save(data) 
}
