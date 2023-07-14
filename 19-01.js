// var myName = "rahul";
// console.log(myName);

// const myName = [];
// console.log(myName);
// myName.push("john")
// console.log(myName);

// {
//     var num=5;
// }
// console.log(num);/





// let firstName = "Rahul";
// let lastName = "kumar";

// let fullName = `${firstName} ${lastName}`
// console.log(fullName);



///////////////////////////////////////////////////////////////////

//default pparams


// function addTwoNumbers(num1, num2){
//     return num1+num2;
// }

// let addTwoNumbers = (num1, num2)=>{
//     return num1+num2;
// };

// console.log(addTwoNumbers(11,2))


// let addTwoNumbers=(num1, num2)=>{
//     console.log(num1);
//     console.log(num2);
//     return num1+num2;
// };
// console.log(addTwoNumbers(2,3))

////////////////////////////////////////////////

//rest and spreat operator are applicable in array and objects


// let array=[2,3,5,6,9];

// let newArray=[...array];
// console.log(array)


// let maxOfNumbers=(...numbers) =>{
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//     maximum=math Math.max(maximum, numbers)
// }
// return maximum
// } ; 
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9));                           


//for object

let object={
    name:"john",
    age:23,
    city:"nwe york",
}; 
let object2={...object,country:"India",favoriteSong:"jehar"}

console.log(object2)











