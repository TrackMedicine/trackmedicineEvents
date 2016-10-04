'use strict';
let read = require('read-file')
let file_mqtt = 'config/mqtt.env'
let file_firebase = 'config/firebase.env'

module.exports = {
	mqtt: {
		credential: process.env.CLOUDMQTT_URL || read.sync(file_mqtt, 'utf8')
	},
	firebase: {
		credential: process.env.FIREBASE_URL || read.sync(file_firebase, 'utf8'),
		file:'config/trackmedicine.json'
	}
};