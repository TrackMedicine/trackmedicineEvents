'use strict'

module.exports = (data) =>{
		{	
			event: data.event,
			data: data.temperature.toString()
			timestamp: data.timestamp
		}
}