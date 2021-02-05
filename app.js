

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
    document.getElementById('start').style.display ="none"
    document.getElementById('stop').style.display ="inline-block"
    document.getElementById('reset').style.display ="none"
    
}
function stop(){
    clearInterval(timerplay)
    document.getElementById('start').style.display ="inline-block"
    document.getElementById('stop').style.display ="none"
    document.getElementById('reset').style.display ="inline-block"
    
}
function reset(){
    document.getElementById('stop').style.display ="inline-block"
    document.getElementById('stop').style.display ="inline-block"
    document.getElementById('reset').style.display ="none"


    Hour.value=0
      Min.value=0
    Sec.value=0
    

}