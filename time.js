setInterval(taymer, 1000)

function taymer(){
    let time = new Date()
    let sec = time.getSeconds()
    let hour = time.getHours()
    let min = time.getMinutes()

    if(hour < 10){
        hour = `0${hour}`
    }

    if(min < 10){
        min = `0${min}`
    }

    document.querySelector('.clock').innerHTML = `${hour} : ${min}`
}


