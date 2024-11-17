function addition(num1, num2) {
    //method 1
    // let result = num1 + num2;
    // return result;

    //method2
    return num1 + num2;
}

let sum = addition(5, 10);
// console.log(sum); // Outputs: 15

//rest function

function restFun(...num1) {
    return num1
}

let rest = restFun(5, 10,20,30,40,12,20,30);
console.log(rest);


//object function

const newObj = {
    name: "samples",
    age:12,
    contact : 1234567890,
}

function objectFun(obj) {
    console.log(`Hi ${obj.name} how are you?`);
    return obj.name
}
console.log(objectFun(newObj));

//another way to do object pass as a argument

// function objectFun(obj) {
//     return obj.name
// }
// console.log(objectFun({name: "samples", age:12, contact : 1234567890})); 
//another way to do object pass as a argument


//array function

const newArray = [1,2,3,4,5,6,7,8]
function arrayFun(arr) {
    return arr[4]
}

console.log(arrayFun(newArray));

//another way to pass array pass as a arguments

// function arrayFun(arr) {
//     return arr
// }

// console.log(arrayFun([1,2,3,4,5,6,7,8]));
