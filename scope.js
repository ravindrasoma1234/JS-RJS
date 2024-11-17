

// don't use var varibles because it access global  and block scope variables

// global scope
let a = 12

if(true){
    // block scope
    let b = 10
    //console.log(a) // 12
    //console.log(b) // 10
}


// there are two way to declare a funtion

// # 1
console.log(test(5))

function test(num){
    const name = "adition"
    console.log(name) 
    return num - 1
    
}

//# 2

const test1 = function(num){
    const name = "subtraction"
    console.log(name) 
    return num 
}

console.log(test1(12))


// child access in paranet scope properties

function names(){
    const name = "shree ram"
    function sarName(){ 
        let sameName = "jai "
        return (sameName + name)
    }
    console.log(sarName())
}
// we can't access proerties of funtion outsid the scope console.log(name);
names()

//same for the if conditons

if(true){
    let num1 = 10
    console.log(num1)
    if(true){
        let num2 = 20
        console.log(num2 + num1) // 20
 
    }
    // here we can.t access outside the scope of child console.log(num1 + num2) // 10
    //child can access properties of parents
}