// normal while loop
let index = 0;
while (index <= 20) {
    //console.log(index)
    index += 2; // Increment by 2 each time to print even numbers only
}

// array while loop

const myArray = ["a", "b", "c", "d"]
let result = 0;
while (result < myArray.length){
   // console.log(myArray[result]);
    result += 1; // Increment by 1 each time to access each element in the array
}

// do while loop with array

const myArray2 = ["a", "b", "c", "d"]
let i = 0;
do {
    console.log(myArray2[i]);
    i++; // Increment by 1 each time to access each element in the array
} while (i < myArray2.length);

// do while loop with special case

let index1 = 11 // it's print 11 coz first print the o/p then it's condtion that's way it's print 11.
do{
    console.log(index1);
    index1 += 2; // Increment by 2 each time to print even numbers only
} while (index1 <= 10);
