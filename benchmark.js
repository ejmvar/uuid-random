/*

	Benchmark public UUIDv4 libraries

	To run this benchmark, first install the following:

		npm install an-uiid node-uuid portable-uuid pure-uuid simply-uuid uuid


var uuids = {

	// Keeping up with competition
	'an-uuid': require('an-uuid'),
	
	// This is the "best" one
	'node-uuid': require('node-uuid'),

	// This doesn't even work?
	// 'performance-uuid': require('performance-uuid').uuid,

	// Slightly slower
	'portable-uuid': require('portable-uuid'),

	// Sooo slow, had to remove it..
	// There are a whole class of modules that use this method and are slow as...
	// 'simply-uuid': require('simply-uuid').generate,
	
	// Best npm package name
	'uuid': require('uuid'),

	// This lib (fastest)
	'uuid-random': require('./index')

};


var i, start, seconds, ops = 1000000;

for (lib in uuids) {
	start = + new Date;
	for (i = 0; i < ops; i++) uuids[lib]();
	seconds = ((+new Date) - start) / 1000;
	console.log(lib, (ops/seconds) + " ops/sec");
}
*/

// Test ours here
var i, start, seconds, ops = 5000000;
var uuidRandom = require('./index');
start = + new Date;
for (i = 0; i < ops; i++) uuidRandom();
seconds = ((+new Date) - start) / 1000;
console.log('uuid-random', (ops/seconds) + " ops/sec");

start = + new Date;
for (i = 0; i < ops; i++) uuidRandom.uuidbin();
seconds = ((+new Date) - start) / 1000;
console.log('uuid-random-bin', (ops/seconds) + " ops/sec");


// We leave pure-uuid out because it uses Math.random().
// It DOES perform better but if you disable crypto, so does uuid-random!
// It also has a strange OOP API that overrides UUID.prototype, etc
// 
// var pureuuid = require('pure-uuid');
// start = + new Date;
// for (i=0; i<ops; i++) new pureuuid();
// seconds = ((+new Date) - start) / 1000;
// console.log('pureuuid', (ops/seconds) + " ops/sec");// 