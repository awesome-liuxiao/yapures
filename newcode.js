var startConsole = function(){
	console.log("running...")
}
var renderWebInfo = function(){
	document.getElementById("demo").innerHTML = "Hello, let's calculate fibonnacci value";
}

// Generated safe typed JS code by YapuresPlus
"use strict";

var Data_Ring = require("../Data.Ring/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Prelude = require("../Prelude/index.js");

var fib = function (v) {

    if (v === 0) {

        return 1;

    };

    if (v === 1) {

        return 1;

    };

    return fib(v - 1 | 0) + fib(v - 2 | 0) | 0;

};

module.exports = {

    fib: fib

};

var tmpFunc = function(){
	echo("tmp func")
}
