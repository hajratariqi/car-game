let interval = "";
const carGif = document.getElementById('car')

function driveCar(){
    let speed = 1
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

function control(){
    clearInterval(interval)
}