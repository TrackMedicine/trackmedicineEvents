let mqttclient

exports.publish = (topic, message) => {
	mqttclient.on('connect', () => {
 		mqttclient.publish(topic, message)
  })
}

exports.subscribe = (topic) => {
	mqttclient.on('connect', () => {
 		mqttclient.subscribe(topic)
  })
}

exports.storeEvent = () => {
	mqttclient.on('message',(topic, msg) => {
		storeEvent.add(topic, msg)
	})
}

var mqtt = function (uri) {
	let credential = !uri ? require('../../config').mqtt.credential : uri
	let mqtt = require('mqtt')

	mqttclient =	mqtt.connect(credential)

 	mqttclient.on('connect', function() {
 		console.log('Mqtt connected')
 	})
 	return mqttclient
}

exports.start = mqtt