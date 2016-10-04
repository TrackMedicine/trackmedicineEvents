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

exports.storeEvent() => {
	mqttclient.on('message',(topic, msg) => {
		storeEvent.add(topic, msg)
	})
}

function mqtt() {
	let credential = require('config').mqtt.credential
	let mqtt = require('mqtt')

 	mqttclient = mqtt.connect(credential)
 	mqttclient.on('connect', function() {
 		console.log('Mqtt connected')
 	})
}

exports.start = mqtt()