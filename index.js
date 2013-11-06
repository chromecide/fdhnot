//create a thingConfig from the command line args
var thingConfig = require('./lib/cli.js').args;

//include FluxData
var FluxData = require('FluxData');

//create a Channel for our Thing
var thing = new FluxData.Channel(thingConfig);

console.log(thing);