//assign the args to a variable
var args = process.argv;

var thingConfig = {};

//loop through the arguments
//we start at position 2, because the first item is "node" and the second item is the script name
for(var itemIdx=2;itemIdx<args.length;itemIdx++){

  var argItem = args[itemIdx];

  // split the current item on an equals sign, 
  // this will result in an array with item 0 being the key
  // and item 1 being the key value

  var arg = argItem.split('=');

  thingConfig[arg[0]] = arg[1];

}

console.log(thingConfig);


//include FluxData
var FluxData = require('FluxData');

//create a Channel for our Thing
var thing = new FluxData.Channel(thingConfig);

console.log(thing);