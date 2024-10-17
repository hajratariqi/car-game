let interval = "";
const carGif = document.getElementById('car')
let speed = 1
let signalInterval = ""
let i = 0

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