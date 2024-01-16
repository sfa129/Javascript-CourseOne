//console based example
// array return object -->
//     <!-- making object -->
var WebCourse = {
    t1 : "ali",
    t2 : "ahmer"
}
//object amend
WebCourse.t3 = "sajjad"; // this will add t3 in above

//passing array into the object
WebCourse.class = [18,19]

//we also pass obect into object and object into array

//what particular property present in particular object
var abc = "t4" in WebCourse;
abc

//object into array
var arrOne = [
    {
        question: "What is your name?",
        answer: {
            a : "ali",
            b : "ahmer",
            c : "faiz"
        },
        correctanswer: "c"
    },
    {
        question: "What is your age?",
        answer: {
            a: "10",
            b: "20",
            c: "30"
        },
        correctanswer: "b"
    },
]

//method also called function when the function used in a object

//"this" is a keyword which is identify the object in which you are

//constructor function: the functio which creates the object

//create the constructor function
function Course (t1, t2, t3){
    this.a = t1;
    this.b = t2;
    this.c = t3;
}
//create the instance || use the "new"
var xyz = new Course("ali", "basit", "ghous")
//so when we check out the xyz, so it will contain the object 