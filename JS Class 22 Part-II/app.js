//to find your url
//FIND YOUR URL
// function websiteurl(){
//     var weburl = window.location.href;
//     console.log(weburl)
// }

//window.location.href   ||   is used to find the url of your page
//window.location.pathname || output is "/", it is the path of your main file
//window.location.hostname   || when your go any other page of your website and 
                            // type this command, it will provide the host name like www.google.com

// //seeting the url
// function websiteurl(){
//     var weburl = window.location.href;
//     windows.locate.href = www.google.com //(full link)
// }
// //second way to setting the url || recommended
// function websiteurl(){
//     var weburl = window.location.href;
//     windows.locate.assign = www.google.com //(full link)
// }

//replace || when you will login and then back, then login page will be replaced 
// function websiteurl(){
//     var weburl = window.location.href;
//     windows.locate.replace = www.google.com //(full link)
// }

//reload the page from cache and from server
function websiteurl(){
    var weburl = window.location.href;
    windows.locate.reload() //cache || in parenthesis "empty" & "false" are true
    windows.location.reload(true) // from server
}