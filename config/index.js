'use strict';
let read = require('read-file')
let file_mqtt = 'config/mqtt.env'

module.exports = {
	mqtt: {
		credential: process.env.CLOUDMQTT_URL || read.sync(file_mqtt, 'utf8')
	}
};