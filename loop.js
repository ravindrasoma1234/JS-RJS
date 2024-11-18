for (let i = 0; i < 10; i++) {
   // console.log(`for loop ${i}`);    
}

for (let i = 0; i < 5; i++) {
    console.log(`for loop in  ${i}`);
    for (let j = 0; j < 5; j++) {
    console.log(`for loop ${j}`);
}    
//console.log(`for loop ${j}`);
}

// for loop in array

const arr = ["ram","laxman","hanuman"];
console.log(`names in arry using index value :- ${arr[0]}`);
for (let i = 0; i < arr.length; i++) {
    console.log(`names in arry using for loop ${arr[i]}`);
}

// to stop condition using break keyword
for (let i = 0; i < 10 ; i++) {
    if( i == 5){
        console.log(`5 detected ${i}`);
        break;
    }
    console.log(i);
}

console.log("------------------------------");

// to continue condition using continue keyword

for (let i = 0; i < 10 ; i++) {
    if( i == 5){
        console.log(`5 detected ${i}` )
        continue;
    }
    console.log(i);
}