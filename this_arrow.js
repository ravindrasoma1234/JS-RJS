// declaration of arrow functions
const arrow = () =>{
    console.log("Hello World!");
}
arrow();

//access context in object or function using this keyword
const names =  {
    firstName:"John",
    lastName:"Doe",
    welcomeMessage : function(){
        return `Welcome ${this.firstName} ${this.lastName}!`;
    }
}
console.log(names.welcomeMessage());
