class sam{
    constructor(){
        
    }
}
function Person(naam,umar,color){
    this.naam=naam
    this.age=umar
    this.favColor=color
}

let p1=new Person("mav",2.5,"browm");
let p2=new Person("namit",19,"pink");

console.log(p1);
console.log(p2);

class Person2{
    constructor(naam,umar,color){
        this.naam=naam
        this.age=umar
        this.favColor=color
    }
    greet(){
        console.log("good morning");
    }
}

let p3 = new Person2("mav",2.5,"browm");
let p4 = new Person2("namit",19,"pink");

console.log(p3);
console.log(p4);