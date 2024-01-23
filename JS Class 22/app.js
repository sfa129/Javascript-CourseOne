//console based commands

//forward and back at any website
// history.forward()
// history.back()
//another way of doing above
// history.go(1)  //forward one page
// history.go(-2) // back two pages 

//I move on this website from which
// document.referrer //it gives the 

//open new page with your HTML
// var content = '<h1>Hello World</h1>'
// window.open().document.write(content)

//make function of above
// function press(){
//     var content = '<h1>Hello World</h1>'
//     window.open().document.write(content)
// }

//above function but with particular website
// function press(){
//     window.open('https://www.google.com/')
// }

//same above with height and width
// function press(){
//     window.open('https://www.google.com/', 'win1', 'width = 200, height=100, top=50, left=50')
// }

//pop up wala scene
// function press(){
//     window.open('https://www.google.com/', 'win1', 'width = 200, height=100, top=50, left=50')
//     if (win === null){
//         alert("Please disable your pop-up blocker");
//         window.close()
//     }
// }