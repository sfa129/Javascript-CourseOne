// General Structure of for loop
// var a;
// for(initilization; Condition; increment / decrement){
//     document.write
// }

//Increment
// var a;
// for(a=1; a<=10; a++){
//     document.write(a + "<br/>")
// }

// Decrement
// var b;
// for(b=10; b>=1; b--){
//     document.write(b + "<br>")
// }

//increment "2"
// var a;
// for(a=1; a<=10; a = a + 2){
//     document.write(a + "<br/>")
// }

// Table of 2
// for(var a = 1; a <= 10; a++){
//     document.write("2" + "x" + a + "=" + 2*a + "<br>")
// }

//Printing Array
// var countries = ["Pakistan", "USA", "UK"]
// for(i=0; i<countries.length; i++){
//     document.write(countries[i] + "<br>")
// }

//Class 13 starts now:-

//Printing 1 to 100;-
// for(var a=1; a <=100; a=a+10){
//     for(var b=a; b <= a+9; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }

// Convert the input in lower case
// var City = prompt("Enter your city")
// var arr = ["karachi", "lahore", "islamabad"]
// City = City.toLowerCase()
// for(var i=0; i<arr.length; i++){
//     if(arr[i] === City){
//         alert("City has found")
//     }else {alert("City not found")
// }
// break;
// }

//Convert the output in upper case
// var City = prompt("Enter your city")
// var arr = ["KARACHI", "LAHORE", "ISLAMABAD"]
// City = City.toUpperCase()
// for(var i=0; i<arr.length; i++){
//     if(arr[i] === City){
//         alert("City has found")
//     }else {alert("City not found")
// }
// break;
// }


//Convert the user input in Capitalize
// var City = prompt("Enter your city")
// var firstchar = City.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var lastchar = City.slice(1);
// lastchar = lastchar.toLowerCase();

// City = firstchar + lastchar
// console.log(City)

// var arr = ["Karachi", "Lahore", "Islamabad"]
// for(var i=0; i<arr.length; i++){
//     if(arr[i] === City){
//         alert("City has found")
//     }else {alert("City not found")
// }
// break;
// }

//rounding numbers
// var a = 5.5;
// var round = Math.round(a);
// console.log(round)

//ceil // gives next higher value irrespective of decimal either less than 5 or than greater than 5 
// var a = 2.1;
// var round = Math.ceil(a);
// console.log(round)

//Floor // opposite of ceil
// var a = 3.8;
// var round = Math.floor(a);
// console.log(round)

//generate random values between 0 and 1 with decimals
//math.random()

//toss game
// var heads = prompt("Enter heads username");
// var tails = prompt("Enter tails username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if (toss === 0){
//     alert(heads + " win the toss")
// }else{
//     alert(tails + " win the toss")
// }

//convert strings into integers
//first
// Number("12")
//second
// parseInt("12")

//convert number into string
// var a = 10;
// console.log(a.toString())

//control the decimal
// var a = 3.44444542543254;
// var b = a.toFixed(2);
// console.log(b)

//switch statements:-
// var a = "Ahmer";
// switch(a){
//     case "Faiz":
//         alert("Hello")
//     break;
//     case "Ahmer":
//         alert("world")
//     break;
//     default:
//         alert("Hello world")
// }


//function example (continued class 15)
// function setName(){
//     var name = document.getElementById('xyx');
//     name.value = "Faiz"
// }

// setName()

//give ASCII code 
//var a = "A";
// a.charCodeAt();


//Home Class 12 & 13
// condition in for loop
// var countries = ['UK', 'USA', 'KSA', 'Turkeye', 'Pakistan']
// for(var i=0; i < countries.length; i++){
//     if(countries[i] === "Pakistan"){
//         document.write("I am Proud to be a Pakistani")
//     }
// }

//infinite loop
// var a;
// for(a=1; a > 0; a++){
//     console.log("Hello world")
// }

// //nested loop
// for(var a = 0; a < 5; a++){
//     for(var j=0; j < 3; j++){
//         document.write("Pakistan Zindabad" + "<br>")
//     }
// }

//nested loop first / last name example
// var firstname = ["Ahmer", "Aqil", "Sajjad", "Ayaz"]
// var lastname = ["Ali", "Ahmed"]

// for(var a = 0; a<firstname.length; a++){
//     for(var b = 0; b<lastname.length; b++){
//         document.write(firstname[a] + " " + lastname[b]+ "<br>")
//     }
// }

//printing diamond traingle

// for(var a = 0; a < 10; a++){
//     for(var b = 0; b <= a; b++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for(var a=0; a<10; a++){
//     for(var b=0; b<=a; b++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
//check the palindrom words -- This is application
// var word = prompt("Enter the word");
// var check = '';
// for(var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }

// if(word === check){
//     document.write(word + " is the palindrome word")
// }

//change into lower case
// var names = "FAIZ";
// names = names.toLowerCase();
// document.write(names)

//change into upper case
// names = names.toUpperCase()
// document.write(names)

// //finding index number
// var name = "Faiz Ahmed"
// document.write(name.indexOf("d"))

//Basic Calculator
// var val1 = prompt("Enter your first value")
// var sign = prompt("Enter your operator")
// var val2 = prompt("Enter your second value")

// console.log(val1 + sign + val2)

// if(sign === "+"){
//     alert((+val1)+(+val2))
// }
// else if(sign === "-"){
//     alert(val1 - val2)
// }
// else if(sign === "*"){
//     alert(val1 * val2)
// }
// else if(sign === "/"){
//     alert(val1 / val2)
// }
// else if(sign === "%"){
//     alert(val1 / val2 *100 + "%")
// }

//Finding double spaces
// var str = prompt("Enter your text")
// var numChars = str.length;            // as such no need, just use this var for only storing purpose

// for(var i=0; i <= numChars; i++){
//     if(str.slice(i, i+2) === "  "){
//         alert("Your text have double spaces")
//     }
// }

// find and replace the text from the paragraph
// var text = "Pakistan came into being in 1947. Pakistan Day is celebrated on twenty third march eveyyear";
// var indexNum = text.indexOf("twenty third march");
// var firsttext = text.slice(0, indexNum);
// var replacement = "23rd March";
// var thirdtext = text.slice(indexNum + 18);
// console.log(firsttext + replacement + thirdtext)

// //finding element on particular location
// var a = "faiz";
// console.log(a.charAt(2))

//replace function
// var a = "this is funny";
// var aone =  a.replace("funny", "not funny");    
// console.log(aone)

//replace funtion with at multiple location
// var a = "this is funny, this is funny" 
// var aone =  a.replace(/funny/g, "not funny");    
// console.log(aone)

//home Class 14 & 15
// a
// Tue Apr 04 2023 18:00:49 GMT+0500 (Pakistan Standard Time)

// a.getDate()
// 4

// a.getHours()
// 18

// a.getDay()
// 2

// a.getHours()
// 18

// a.getMonth()
// 3

//calculate the age:-
// var dob = new Date(prompt("Enter your age", "Jan 1, 1970"));
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// var diff = todaymilli - dobmilli;
// var accuage = Math.floor(diff/1000/60/60/24/30/12);
// document.write("Your age is:" + accuage);

//How to define function;-
// function add(a,b,c){
//     document.write(a+b+c)
// }
// add(5,8,16)

//another way to call function
// function new(){
//     alert("Hello world")
// }
// new();

//function with return value. Return is used to get the value from function
// function add(a,b,c){
//     var z = a+b+c;
//     return z;
// }
// var a = add(5,6,18)
// document.write(a)

//concept of local / global variable
// var x = 15; // global variable and can be used everywhere / outside the function
// function add(a,b,c){
//     var y = 10; //local variable and can't be outside the function
//     var z = a+b+c;
//     return z;
// }
// var a = add(5,6,18)
// document.write(a+x) //right statement
// document.write(a+y) // wrong statement

//function of basic calculator
// function calc(num1, opr, num2){
//     if(opr === "+"){
//         return num1 + num2;
//     }else if(opr === "-"){
//         return num1 -num2;
//     }else if(opr === "*"){
//         return num1 * num2;
//     }else{
//         return "Incorrrect Operator"
//     }
// }

// var a = calc(4,"+",8);
// console.log(a);

// var b = calc(8,"-", 2);
// console.log(b);

// var c = calc(85,"^",95);
// console.log(c);

//default parameters
// function def(a, b=4){
//     return a+b;
// }
// var c = def(1);
// console.log(c); 

//pass argument but already having the default parameters
//always consider the parameter not the default value
// function def(a, b=4){
//     return a+b;
// }
// var c = def(8, 5);
// console.log(c); 

//while loop
// var i = 0;
// while(i<=10){
//     alert("Hello world");
//     i++;
// }

//do-while loop
//atleast run one time
// var a = 0;
// do{
//     alert("Hello world");
//     a++;
// }
// while(a<=10);

//use "onclick in the anchor tag of html file"
// function first() {
//     alert("Hello world")
// }

//second piece of code of above concept
// function first(){
//     var a = 2+8;
//     document.write(a)
// }


// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }

// function getNameTwo(){
//     var name = document.getElementbyId('xyz');
//     name.value = "Faiz"
// }

// getNameTwo()












