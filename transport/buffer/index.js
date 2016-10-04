let firebaseClient = require("firebase");
let config = require('../../config/').firebase
let event

function firebase() {
	firebaseClient.initializeApp({
	  databaseURL: config.credential,
	  serviceAccount: config.file
	});
}

function save(topic, message){
firebaseClient.database().ref('events').push({
    name: topic,
    data: message.toString()
  })
}

exports.event = firebase
exports.save = function(topic,message) { 
	save(topic, message) 
}
