// function hour(){
//     var a = prompt()
// }

var displayHour= document.getElementById('hour')
var displayMin= document.getElementById('min')
var displaySec= document.getElementById('sec')


function timer(){
    displaySec.value--
    if(displaySec.value == -1){
        displayMin.value--

        displaySec.value=59
    }else if(displayMin.value == -1){
        displayHour.value--
        displayMin.value =59
    }
}

function start(){

    timerplay = setInterval(timer,1000)
}
