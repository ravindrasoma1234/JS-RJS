// Array specific loops are


// map() =================================================================
const map = new Map();
map.set("foo", "bar");
map.set("bar", "baz");
map.set("baz", "door");


// forin loop we can't iterate map method 
for (const [key, value] in map) {
   console.log(key, value);// print empty 
}


// forof loop we can iterate map method

for (const [key,value] of map) {
   //console.log(key, value);
    
}


// Array =================================================================
const myArray = [1,2,3,4,5]


//forof loop we can iterate array
for (const element of myArray) {
   console.log(element);
}


const myArray1 = ["a", "b", "c", "d", "e", "f"]

//forin loop we can iterate array keys
for (const key in myArray1) {
   //console.log(myArray1[key]);
}

// object keys  =================================================================

const myObject = {
   name: "John",
   age: 30,
   city: "New York"
}

// forin loop we can iterate object{}

for (const key in myObject) {
   console.log(key, myObject[key]) // myObject is iterable
}

//forof loop we can not be iterate object keys

// for (const [key, value] of myObject) {
//    //console.log(key, value) // myObject is not iterable
// }

// for (const key of myObject) {
//    console.log(key,myObject[key]) // myObject is not iterable
// }

