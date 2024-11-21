//fn defination

// function samarth(){
//     console.log("mai hu jian");
//     return "juice pila do"
// }

//fn calling
// samarth();

// console.log(samarth());

// function sunio(x,y){
//     console.log(x);
//     return y;
// }
// console.log(sunio(20,"krishna"));

// console.log(sunio(10,"sam"),"y");

//-----------------------------------------------------------------------
// function sunio(x,y){
//     console.log(x); //10
//     console.log(y); //undefined
    
//     console.log(x+y);
//     //not a number
// }
// sunio(10);

// console.log(typeof(NaN));

// console.log(5.1+1.5);

//-----------------------------------------------------------------------
// let person={
//     naam:"mitthu don",
//     kaam:"juice pilana",
//     profession :"boxing",
//     greet : function mitthu(){
//         console.log(`ye gareeb inki kismat achi hojae`);
//     }
// }
// console.log(person.kaam);
// console.log(person.greet);
// console.log(person.greet());

//-----------------------------------------------------------------------
let person={
    naam:"mitthu don",
    kaam:"juice pilana",
    profession :"boxing",
    greet : function mitthu(){
        // console.log(`hello from ${person.naam}`);    //not a good way
        console.log(`hello frommm ${this.naam}`);
    }
}
person.greet();