let i = 0;
let speed = 1;
let interval = "";
let signalInterval = "";
let carGif = document.getElementById('car');
const signal = document.getElementById('signal');

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
        driveCar()

    } else if (signal.src.endsWith('green.png')) {
        signal.src = './red.png';
        clearInterval(interval)
    }
     else {
        signal.src = './yellow.png';
        clearInterval(interval)
        driveCar()
    }
},2000)
}
ChangeSignal()



var toogle = false
function control(){
    let btn = event.target
    

    if(toogle === false){
    clearInterval(interval)
    btn.innerText = 'Start'
    btn.style.backgroundColor = 'red'
    toogle = true
    }
    else{
        clearInterval(interval)
        driveCar()
        btn.innerText = 'Stop'
        btn.style.backgroundColor = 'green'
        toogle = false
    }
}