const user2 = Symbol("laxman");

const user = {
    name : "ram",
    age : 25,
    email : "ram@example.com",
    location : "MIDC_Road",
    phone_number : "9876543210",
    hobbies : ["reading", "painting", "coding"],
    [user2] : "Laxman",
}


// console.log(user.age, user.name, user[user2]);

// user.greatings = function(){
//     console.log("Great");
// }

// user.greatingsTwo = function(){
//     console.log(`byeeee ${this.name}`);
// }
// console.log(user.greatings(), user.greatingsTwo());


const users = {
    names :"raja",
    emailId : "raja@example.com",
    isLoggedIn : false,
}

// same like spread operator but not used mosty
const allUsers = Object.assign({},user,user2,users);
// console.log(allUsers);


//mostly used for combine or cancateant more tham two Objects
const allUsers2 = {...user, ...users, ...user2}

// console.log(allUsers2);

const emp = [
   
    {
        empId : 1,
        empName : "abc",
        empDept : "IT",
        empSalary : 50000,
    },
    {
        empId : 2,
        empName : "def",
        empDept : "HR",
        empSalary : 60000,
    },
    {
        empId : 3,
        empName : "ghi",
        empDept : "Finance",
        empSalary : 70000,
    }
    
]

// console.log(Object.keys(emp[0]));
// console.log(Object.values(emp[0]));
// console.log(Object.entries(emp[0]));

// Object Destructuring Methods 

//

const course =   {
    courseId : 1,
    courseName : "Web Development",
    courseDuration : "6 months",
    courseFee : 30000,
    courseInstructor : "John Doe",
    }

const {courseName} = course;

console.log(courseName);
