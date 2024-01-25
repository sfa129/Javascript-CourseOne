
//Note: "let" only use in braces in which it will declared, no use outside the braces 
//above note represents the scope of let
//use let only one time, not as the var || 
// let a = "ali";
// let a = "ahmer";
// console.log(a)

//"const" is use only read purpose, it is not able to delete or update

//Template literal
//in concantenation || but not working
// let firstName = "Syed";
// let secondName = "Faiz Ahmed";
// console.log('My name is ${firstName} ${secondName}') 

//concatenate the arrays with method "concat()"
// //concatenate the arrays with method "concat()"
// var arr1 = ['ahmer', 'sajjad'];
// var arr2 = ['aqil', 'ayaz'];
// var merge = arr1.concat(arr2);
// console.log(merge)


//spread operator
//above array eg with spread operator || also used in objects
// var arr1 = ['ahmer', 'sajjad'];
// var arr2 = [...arr1,'aqil', 'ayaz']; //it will get the elements of array not whole array
// console.log(arr2)

//object destructuring  || but not working
// var student = {
//     name: "Faiz" ,
//     school: "saylani" ,
//     roll: 123
// }

// let {name,school, roll} = student;

// console.log(name)
// console.log(class)

//ternart operator || also use else if like 
// var a = 20;
// var check = a > 30 ? "30 bara hai" : "30 se chota hai"; // also used also operator like && or ||
// console.log(check)

//second example \\ Note: DOM pr boolean render nahi hota 
// var bool = true;
// var check = bool && "Faiz";
// console.log(check)

//promise
// var promise = new Promise(function(resolve, reject){
//     var check = "Available";
//     if(check === "Available"){
//         resolve("It is found")
//     }else{
//         reject("It is not found")
//     }
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

//Promise - real example with firebase database
// var promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added", function(data){
//         if(data.val()){
//             resolve(data.val())
//         }else{
//             reject("something went wrong")
//         }
//     })
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

//promise status || it is in pending jab tak chalega nhi || video 2:11 min