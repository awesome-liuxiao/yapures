var startConsole = function(){
	console.log("running...")
}
var renderWebInfo = function(){
	document.getElementById("demo").innerHTML = "Hello, let's calculate fibonnacci value";
}

/** -*-PureScript Code -*-

module Main where
import Prelude

fib :: Int -> Int
fib 0 = 1
fib 1 = 1
fib n = fib (n - 1) + fib (n - 2)
**/

var tmpFunc = function(){
	echo("tmp func")
}
