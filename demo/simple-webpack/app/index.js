"use strict";
var greeter_1 = require('./greeter');
var element = greeter_1.default();
setTimeout(function () {
    document.getElementById('root').appendChild(element);
}, 2000);
