let speed = 1
function driveCar(){
    const carGif = document.getElementById('car')
    const interval = setInterval(()=>{
        speed += 10
        carGif.style.left = speed + 'px'
        
    
    },100)
}
driveCar()