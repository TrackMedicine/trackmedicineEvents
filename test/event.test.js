'use strict';

var assert = require('chai').assert
var Event = require('../transport/model/event')

describe('Event', function() {

  it('holds the given data', function() {
  	
  	const name = 'event type'
  	const data = {some: 'data', here: 'too'}

  	var event = new Event(name, data)

  	assert.deepEqual(event.name, name)
  	assert.deepEqual(event.data, data)
  })
})