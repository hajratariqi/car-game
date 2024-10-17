function driveCar(){
    let speed = 1
    const carGif = document.getElementById('car')
    const interval = setInterval(()=>{
        speed += 10
        carGif.style.left = speed + 'px'
        
        if(carGif.style.left == '971px'){
            speed = 1
        }
        console.log(speed);
    },100)
}
driveCar()