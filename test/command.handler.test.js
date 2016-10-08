var assert = require('chai').assert
var Command = require('../command.handler')


Command.augmentAssert(assert);
temperatureCMD = {
	type: 'temperature',
	data: {
			value: '22'
	}
}

describe('Command Handler', () => {
	describe('.create', () => {
		it('Create a new command handler', () => {
			assert.emitEvents( () => {'temperature', new })
		})
	})
})