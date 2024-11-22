const myNum = [1, 2, 3, 4, 5, 6, 7, 8,9,10]

myNum.filter((num) =>{
   // console.log(num)
})

const numFilter = myNum.filter((num) =>{
    if(num > 5) return num;
})
//console.log(numFilter);

const newArray = []

myNum.forEach((num) =>{
    const newValues = num
    myNum.push(newValues)
   // console.log(newValues)
})

const newArray1 = [10,11,12,13,14,15,16,17,18]

newArray1.forEach((item) =>{
    myNum.push(item)
});

// console.log(newArray1);
// console.log(myNum);


// ----------------------------------------------------------------

// oldArray = ["a", "b", "c", "d", "e", "f"]
// nweArray2 = ["x,y", "z"]


const book =[
    {
        title : "Book One", genre : "Fiction", publisher : 1981, edition : 2004
    },
    {
        title : "Book Two", genre : "Non-Fiction", publisher :1865, edition : 2001
    },
    {
        title : "Book Three", genre : "historical", publisher :1986, edition :2000
    },
    {
        title : "Book Four", genre : "science", publisher :1998, edition :2014
    },
    {
        title : "Book Five", genre : "finance", publisher :1879 , edition :2001,
    },
    {
        title : "Book Six", genre : "Fiction", publisher :1886, edition :2010
    }
];

const newBook = book.filter((bk) =>
     {
    return bk.genre == "Fiction" && bk.publisher > 1800 ;
})
//console.log(newBook)

<<<<<<< HEAD
=======
// ------------------  MApping ----------------------------
>>>>>>> fc5cfbaa5fa5cd2ac9bc283729595a48923ff691

<<<<<<< HEAD
=======
const newMap = [1,2,3,4,5,6,7,8,9,10]
>>>>>>> fc5cfbaa5fa5cd2ac9bc283729595a48923ff691

const _Map = newMap.map((num) => {
    return num * 2;
})

<<<<<<< HEAD
=======
//console.log(_Map)

// ============== Chaninige --------------------

const chanining = [1,2,3,4,5,6,7,8,9,10]

const _chain =  chanining
    .map((num) => { return num * 2 })
    .map((num) => { return num + 1 })
    .filter((num) => { return num > 10})

console.log(_chain)
>>>>>>> fc5cfbaa5fa5cd2ac9bc283729595a48923ff691