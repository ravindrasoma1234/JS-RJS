//Array.from(): Creates a new array from an array-like object.

const arr = new Array({
    name: "Ram",
    age: 25,
    address: "MIDC",
    city: "Solapur"
});

const values = Array.from(Object.keys(arr[0]));
console.log(values);

//Array.isArray(): Checks if a value is an array.

const arr1 = new Array('');
console.log(Array.isArray());

//Array.of(): Creates a new array from a variable number of arguments.
const scrose1 = 100;
const scrose2 = 200;
const scrose3 = 300;
console.log(Array.of(scrose1, scrose2, scrose3));
