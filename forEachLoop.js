const myArray = ["java","JS","CPP","python","Angular"]

// forEach loop

const newArray1 = myArray.forEach((item) =>{
    // console.log(item);
})

function printNew(item) {
    // console.log(item + " is a programming language");
}
myArray.forEach(printNew);

// foreach have a 2 more paranmetes indes nad arr

myArray.forEach((item, index, arr) =>{
    // console.log(`Index: ${index}, Iteams: ${item}, Array: ${arr}`);
});

// this code was not returns new array so we can't use resrun or assgin to newarray
// const newArray1 = myArray.forEach((item) =>{
//     return item + " is a programming language";
// })

// console.log(newArray1);

// map loop this is the best way to write code we can modify in future when we need.

const newArray = myArray.map((item) => {
    return item + " is a programming language";
})
// console.log(newArray);

// this is okay for training purpose because we can't modification in this array
myArray.map((item) => {
    // console.log(item + " is a programming language");
})

newCoding = [
    {
        languageName:"javascript",
        author:"John Doe",
        year:2015
    },
    {
        languageName:"Python",
        author:"Jane Doe",
        year:2012
    },
    {
        languageName:"Java",
        author:"Michael Doe",
        year:2000
    }
]

newCoding.forEach((item) => {
    console.log(`${item.languageName} is created by ${item.author} and was introduced in ${item.year}`)
})