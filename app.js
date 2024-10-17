let interval = "";
const carGif = document.getElementById('car')
let speed = 1

function driveCar(){
     interval = setInterval(()=>{
        speed += 10
        carGif.style.left = speed + 'px'
        
        if(carGif.style.left == '971px'){
            speed = 1
        }
        console.log(speed);
    },20)
}
driveCar()

var toogle = false
function control(){
    let btn = event.target

    if(toogle === false){
    clearInterval(interval)
    btn.innerText = 'Start'
    btn.style.backgroundColor = 'gold'
    btn.style.color = 'black'
    toogle = true
    }
    else{
        driveCar()
        btn.innerText = 'Stop'
        btn.style.backgroundColor = 'green'
        btn.style.color = 'white'
        toogle = false
    }
}