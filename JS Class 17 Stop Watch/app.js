var min=0;
var sec=0;
var msec=0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer, 10);
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
}


//basics of JS and also related to above code 
// default function and takes two parameteres i.e. function and time
//this function called repeatedly after tiime which is specified in the second parameter

// function timer(){
//     console.log("running...")
// }

// setInterval(timer, 1000)

//default function and takes two parameters i.e. function and time
// this function called once after time which is speciifed in the second parameter

// function timeOut(){
//     console.log('running...')
// }

// setTimeout(timeOut, 4000)

//start the basics

// var count=0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }

// interval = setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// }, 6000);