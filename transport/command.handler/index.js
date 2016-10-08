let firebase = require('../buffer')

exports.handler = (data) => {
	let event
	let type = data.event

	if (type === 'addedNewClient'){		
			event = new AddedNewClient(data)
	} else if(type === 'deliveryRegistred'){
			event = new DeliveryRegistred(data)
	} else if(type === 'deliveryConfirmed'){
			event = new DeliveryConfirmed(data)
	} else if(type === 'deliveryClosed'){
			event = DeliveryClosed(data)
	} else if(type === 'deliveryAmend'){
			event = DeliveryAmend(data)
	} else if(type === 'clientAssociatedWithDelivery'){
			event = ClientAssociatedWithDelivery(data)
	} else if(type === 'SettedBoxTemperature'){
			event = new SettedBoxTemperature(data)
	}

	firebase.store(event);
}
