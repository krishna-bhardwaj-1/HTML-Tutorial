/*
hoisting: whenever we try to access a variable or a function even before its declaration then it is called hoisting.
*/
console.log(a);
var a=1000;
//var -> undefined if hoisting
//let/const -> value unavailable if hoisting

//----------------------------------------------------
sam()

function sam(){
    console.log('i am sam fn');
}
