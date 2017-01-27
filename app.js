var windows1251 = require('windows-1251');

var fs = require('fs');


var hello = "Привет"

var buffer = windows1251.encode(hello, {mode: 'html'});

console.log(buffer)