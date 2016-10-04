let mqttclient
let storage = require('../buffer')
let queue = 'events'

exports.publish = (topic, message) => {
	mqttclient.on('connect', () => {
 		mqttclient.publish(topic, message)
  })
}

var subscribe = function (topic= queue) {
	mqttclient.on('connect', () => {
 		mqttclient.subscribe(topic)
  })
}

var storeEvent = function() {
	mqttclient.on('message',(topic, msg) => {
		storage.save(topic, msg)
	})
}

var mqtt = function (uri) {
	let credential = !uri ? require('../../config').mqtt.credential : uri
	let mqtt = require('mqtt')

	mqttclient =	mqtt.connect(credential)
 	mqttclient.on('connect', function() {
 		console.log('Mqtt connected')
 	})
}

exports.start = () => {
	mqtt()
	subscribe()
	storeEvent()
}