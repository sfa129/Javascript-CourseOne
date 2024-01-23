
//constructor function
//first letter of name of this function always capital
// function Student(name, rollno){
//     this.name = name;
//     this.rollno = rollno;
// }

//to create object from constructor function, use the keyword called "new"
// var student1 = new Student("Ahmer", 123);
// var student2 = new Student("Sajjad", 456);


//prototype function:-
// function Student(name, rollno){
//     this.name = name;
//     this.rollno = rollno;
//     this.getName = function(){
//         return this.name
//     }
// }
// var student1 = new Student("Ahmer", 123);
// var student2 = new Student("Sajjad", 456);
// //
// console.log(student1)
// console.log(student2)

// output
// Student {name: 'Ahmer', rollno: 123, getName: ƒ}
// app.js:26 Student {name: 'Sajjad', rollno: 456, getName: ƒ}

//so in above output, every time javascript make the function, therefore we can make prototype
// function Student(name, rollno){
//     this.name = name;
//     this.rollno = rollno;
// }

// Student.prototype.getName = function(){
//     return this.name
// }
// var student1 = new Student("Ahmer", 123);
// var student2 = new Student("Sajjad", 456);


// console.log(student1)
// console.log(student2)

// // output is below || js not make the function again and again
// Student {name: 'Ahmer', rollno: 123}name: "Ahmer"rollno: 123[[Prototype]]: Object
// app.js:46 Student {name: 'Sajjad', rollno: 456}


//just for information, means it is another way to get 
// console.log(student1.getName())

//check the particular property exist or not in the object
// var student2 = {
//     name: "Ahmer",
//     rollNo: 123
// }

// console.log("name" in student2);
//output || it gives the true if exist or vice versa

//second method to check the particular property exist or not in the object
// console.log(student2.hasOwnProperty("rollNo"))
//output || it gives the true if exist or vice versa

//Notes: if we use "in" to check particular property, it will check the defaul properties also like proto (prototype)
// but in the "hasOwnProperty", it will not check

//Find that object contain how many properties
// var student2 = {
//         name: "Ahmer",
//         rollNo: 123,
//         Class: "Four"
// }

//prop just a variable name

// for(var prop in student2){
//     console.log(prop)
// }

//how to get values 
// for(var key in student2){
//     console.log(student2[key])
// }

//how to get both properties and values
// for (var propval in student2){
//     console.log(propval, student2[propval])
// }

