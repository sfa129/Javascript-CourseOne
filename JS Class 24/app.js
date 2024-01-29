//destructuring
//Note: you can access easily of all elements of obj / arrays after storing desired elements in one variable
// let obj = {
//     name: "Faiz",
//     email: "sfahmed129@gmail.com"
// }

// let { name , email } = obj;  //curly braces used because it is used in object
// console.log(name)
// console.log(email)

//destructuring in array
// let arr1 = ["Faiz", "Ahmer", 123];

// let [name1, name2, name3] = arr1;  //"name1", "name2" are only variable names
// console.log(name3)

//Function Expression  || assign function into variable || change syntax to write the function
// var foo = function(){
//     console.log('Hello World')
// }
// foo()

//Arrow function || use arrow instead of word 'function'
// var func = () => {
//     console.log("I am Arrow Function")
// }
// func()

//Arrow function with passing argument
//if we have only one argument, we can eliminate the parenthesis in first line
//i.e. var foo = name => {
// var foo = (name) => {
//     console.log(`Hello ${name}`)
// }
// foo("Faiz")

//with two arguments  || $ key use with " `` " (this is called template address)
// var foo = (name1, name2) => {
//     console.log(`Hello ${name1} and ${name2}`)
// }
// foo("Faiz", "Ahmer")

//return value
// let foo = () => "Faiz"
// console.log(foo())
//or
// () => "Faiz"

//setinterval in ES6
// setInterval(() => console.log("Hello World"), 1000);

//callback function || jo functions ke ander call hon , or jis k ander call hon woh high order function kehlaega
// let get_data = (render_data) => {
//     firebase.database().ref('/').on('child_added', (data) => {
//         render_data(data.val())
//     })
// }

// let render_data = (data) => {
//     console.log(data)
// }

// get_data(render_data)

//with setinterval
// let get_data = (render_data) => {
//     setInterval(() => {
//         render_data("Faiz")
//     }, 3000);
// }

// let render_data = (data) => {  //'data' used as a parameter name, replaceable
//     console.log(data)
// }

// get_data(render_data)

//high order function 
//above is the high order function
//definition is: woh function jo apne parameter mein aik function receive kare or usko output de

//Array Functions:-
//1. filter 

// var arr = [{name: "Faiz", age: 23}, {name: "Ahmer", age: 24}];
// var filter = arr.filter(function(a){
//     return a.age === 24
// })
// console.log(filter)

//second way
// var arr = [{name: "Faiz", age: 23}, {name: "Ahmer", age: 24}];
// var filter = arr.filter(a => a.age === 23);
// console.log(filter)

//one more eg
// var arr = [{name: "Faiz", age: 23}, {name: "Ahmer", age: 24}];
// var filter = arr.filter(a => false)  // if we write true instead of false it gives all array elements
// console.log(filter)

//search
//startsWith and endsWith
// let name = "Faiz";
// let search = "Fa";
// if(name.startsWith(search)){
//     console.log(name)
// }

// let search = "iz";
// if(name.endsWith(search)){
//     console.log(name)
// }

//array map - update the array with making new array
// let arr = [1,2,3,4,5];
// let multiply = arr.map(a => a * 2)
// console.log(multiply)

//array map || second example
// let arr = [{name: "Faiz"}, {name: "Ahmer"}];
// let update = arr.map(a => a.name = "Sajjad");
// console.log(update);

//get element by id
// let arr = [{name: "Faiz"}, {name: "Ahmer"}];
// let update = arr.map(a => {
//     document.getElementById("Table").innerHTML = a.name
// })

//fetch || it is use to communicate with server to send or receive data
//example
// fetch('link of server')
//     .then(response => response.json())  // convert into the data format into json 
//     .then(data => console.log("result", data))
//     .catch(err => console.log("error", err))

//shortening the above code
// async function getData() {
//     let data = await fetch('link')
//     console.log(data)
// }

//ES6 Classes
//ES6 make the constructor function instead of class
// class Student{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
// }

// let student1 = new Student('Faiz', 'sfahmed129@gmail.com');
// console.log(student1)

//mergin two classes
// class Student{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
// }

// class School extends Student{
//     constructor(name, email, school){
//         super(name, email);
//         this.school = school;
//     }
// }

// let student1 = new School('Faiz', 'sfahmed129@gmail.com', 'Oxford High School');
// console.log(student1);

//promise one more example
// function getData(){
//     let promise = new Promise(function(resolve, reject){
//         fetch('link')
//         .then(resonse => response.json())
//         .then(function(data){
//             resolve(data);
//         })
//         .catch(function(error){
//             reject(error)
//         })
//     })
// }
//     promise.then(function(data){
//         console.log("data =>", data)
//     })
//     .catch(fuction(error){
//         console.log(error)
//     })

//shortening the above example code
// async function getData(){
//     let promise = new Promise(function(resolve, reject){
//         fetch('link')
//         .then(resonse => response.json())
//         .then(function(data){
//             resolve(data);
//         })
//         .catch(function(error){
//             reject(error)
//         })
//     })
// }

// let data = await promise;
// console.log(data)

//add to cart
// function add_to_cart() {
//     var image = document.getElementById('img');
//     var price = document.getElementById('price');

//     var product = {
//         img,
//         price
//     }

//     var arr = [];
//     arr.push(product)

//     localStorage.setItem("cart", arr)
// } 

