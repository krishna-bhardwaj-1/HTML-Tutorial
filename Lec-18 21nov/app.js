/*
declarative are 3 types 1) var 2) let 3) const
var : redeclare reassign
let : reassign  x
const : x       x
*/


// var a=100;
// console.log(a);

// function sam(){
//     console.log("i am sam");
// }
// sam();

var a=100;
function sam(){
    var b=200;
    console.log(b);
    function lol(){
        var c=300;
        console.log(c);
    }
    lol();
}
console.log(a);
sam();
