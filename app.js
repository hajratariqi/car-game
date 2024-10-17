let i = 0;
let speed = 1;
let interval = "";
let signalInterval = "";
let carGif = document.getElementById('car');
const signal = document.getElementById('signal');
let isManualStop = false

function driveCar(){
     
    interval = setInterval(()=>{
        speed += 5
        carGif.style.left = speed + 'px'
        if(carGif.style.left == '971px'){
            speed = 1
        }
    },20)
}
driveCar()


function ChangeSignal(){
signalInterval = setInterval(()=>{
    if (signal.src.endsWith('yellow.png')) {
        signal.src = './green.png';
        clearInterval(interval)
        if(!isManualStop){
        driveCar()
        }

    } else if (signal.src.endsWith('green.png')) {
        signal.src = './Red-light.png';
        if(!isManualStop){
        clearInterval(interval)
        }
    }
     else {
        signal.src = './yellow.png';
        clearInterval(interval)
        if(!isManualStop){
        driveCar()
        }
    }
},2000)
}
ChangeSignal()



var toogle = false
function control(){
    let btn = event.target

    if(toogle === false){
    clearInterval(interval)
    clearInterval(signalInterval)
    ChangeSignal()
    isManualStop = true
    btn.innerText = 'Start'
    btn.style.backgroundColor = 'red'
    toogle = true
    }
    else{
        clearInterval(interval)
        driveCar()
        ChangeSignal()
        btn.innerText = 'Stop'
        btn.style.backgroundColor = 'green'
        toogle = false
        isManualStop = false
    }
}