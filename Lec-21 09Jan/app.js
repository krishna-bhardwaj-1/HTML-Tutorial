// let arr=[10,20,30,40,50];
//arr.forEach();
// arr.forEach(function());
/*

arr.forEach(function(item,index){
    console.log(item*item);
});

*/

// it does not return anything.
/*
let ret=arr.forEach(function(item,index){
    console.log(item*item);
    return item*item;
});

console.log(ret);

*/
//----  MAP -----------
/*
let arr=[10,20,30,40,50];

let ret=arr.map(function(item,index){
    return item+index;
});

console.log(ret);
*/

///------ filter --------
/*
let arr=[1,2,3,4,5,6,7,8,9,10];

let ret=arr.filter(function(item,index){
    if(item%2==0){
        return item;
    }
});
console.log(ret);
*/

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let ret=arr.map(function(item,index){
//     return item*2;
// });

// let arr2=ret.filter(function(item,index){
//     if(item>=10){
//         return item;
//     }
// });

// console.log(arr2);

/*

let arr=[1,2,3,4,5,6,7,8,9,10];

// this is known as chaining

let ret=arr.map(function(item,index){
    return item*2;
}).filter(function(item,index){
    if(item>=10){
        return item;
    }
});

console.log(ret);

*/

function Sam(){

}
console.log(new Sam());
