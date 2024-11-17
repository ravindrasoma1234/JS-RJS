// Immediately invoked function expression (IIFE)


//reson why to use IIFE for avoid global polution; and immediately execute function


(function message(){
    console.log("Hello world!");
})();

// arrow function expression

((message) => {
    console.log(`Hello world! ${message}`);
})("welcome to india!");