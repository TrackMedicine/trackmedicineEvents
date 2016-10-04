let bus = require('./bus')
let storage = require('./buffer')

exports.start= () => {
	bus.start()
  storage.event()
}
