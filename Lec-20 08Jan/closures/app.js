function a(){
    var ex=10;
    var ex2=100;

    function b(){
        console.log(ex2);
    }
    return b;
}

let rerturnedval=a();
console.log(rerturnedval);
rerturnedval();
