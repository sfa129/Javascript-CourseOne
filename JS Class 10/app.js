//home
// var a = prompt("Enter the age", "Your age is");
// alert(a);

// // prompt take input as string;
// var a = prompt("Enter the age", "Your age is");
// var b = a + 10;
// alert(b);

// // to overcome this problem, we use "+" before prompt 
// var a = +prompt("Enter the age", "Your age is");  // second argument is placeholder of input field of prompt
// var b = a + 10;
// alert(b);

// or before "a"
// var a = prompt("Enter the age", "Your age is");
// var b = +a + 10;
// document.write("The Output is" + " " + b);

//conditional statement;

// var age = prompt("Enter your age");
// if (age < 30){
//     document.write("You are eligible")
// }
// else{
//         document.write("You are ineligible")
//     }




//office
// var a = +prompt("Enter Your Age");
// if (a == 20){
//     document.write("This is equal age")
// }
// else if (a > 50){
//     document.write("This is greater")
// }
// else{
//     document.write("This is less")
// }

// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");

// if (age > 20 || gender == "male"){
//     document.write("You are eligible")
// }
// else{
//     document.write("You are not eligible")
// }

//"==" only check value not the type so answer is "True"
// var a = "5";
// if (a == 5){
//     alert("True")
// }
// else{
//     alert("False")
// }

//"===" check value as well as type
// var a = "5";
// if (a === 5){
//     alert("True")
// }
// else{
//     alert("False")
// }

//Grading Example:-

// var a = +prompt("Enter Your Percentage");
// if (a >= 80 && a <=100){
//     alert("A+")
// }
// else if (a >=70 && a <=79){
//     alert("A")
// }
// else if (a >= 60 && a <= 69){
//     alert("B")
// }
// else if (a >= 50 && a <= 59){
//     alert("C")
// }
// else if (a >= 0 && a <= 49){
//     alert("F")
// }
// else{
//     alert("Incorrect percentage")
// }

//Nested if:-
// var a = +prompt("Enter Number");
// if (a <= 20){
//     if (a <= 20 && a >= 15){
//         document.write("You are eligible for Football")
//     }
//     else if (a < 15 && a >= 10){
//         document.write("You are eligible for Cricket")
//     }
// }
// else{
//     document.write("You are not eligible")
// }

//Arrays:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// console.log(students[2])

// Replacement of elements to an existing array:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students[2] = 3;
// students[5] = "Ayaz"
// document.write(students)

// delete the last element:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.pop()
// document.write(students)

// Add element at the last of array:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.push("Pakistan", "KSA")
// document.write(students)

// // delete first element of an array:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.shift()
// document.write(students)

// // Add elements at the start of  an array:-
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.unshift("Ataa", "Taha")
// document.write(students)

//splice method
//first value is target, second value is no. of deletes, third value is replacement 
//below code is use to delete the element at particular place
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3];
// students.splice(2,1)   
// document.write(students)

// below code is use to delete two elements and replaces bilal
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.splice(1,2, "Bilal")   //aap sirf 2 argument k sath bhi use karsakte hain, replacement wala argument optional hai
// document.write(students)

// below code is use to insert the element at particular place
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// students.splice(1,0, "Bilal")
// document.write(students)

// slice method
// use to copy an array
// first value is target, second value is length till you need to copy but length starts from 1 not 0
// var students = ["Faiz", 1, "Ahmer", "Sajjad", 3]
// var newarray = students.slice(1,4)
// document.write(newarray)