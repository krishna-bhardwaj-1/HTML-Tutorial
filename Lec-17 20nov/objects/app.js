// let person={
//     naam:"sam",
//     age:20,
//     favcolor:"black"
// }
// console.log(person.age);
// console.log(person.naam);
console.log(person);


//after this instruction there are nothing change in the existing object.
// Object.freeze(person);


// person.naam="krishna";
// person.ismale=true
// delete person.favcolor;
// console.log(person);

let person={
    naam:"sam",
    age:100,
    favcolour:"black",
    greet : function(){
        console.log("hello");
    }
}
//if i do not return anything from function by default undefined is returned.
