var assert = require('assert');
var object = require('./class.js')

describe("describe Ferry Car passengers allowed", function(){

    it('should find all the passenger number allowed', function(){
    	var findCarPassengers = object.Cars()

    	assert.equal(5, findCarPassengers);

    });
});