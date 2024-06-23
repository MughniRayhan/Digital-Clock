const button = document.querySelector(".btn");
const time = document.querySelector(".time");
// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".min");
// const second = document.querySelector(".sec");
// const colon = document.querySelector(".colon");
//display clock
const display = () =>{
    console.log("first")
         let date = new Date();
         let hr = date.getHours();
         let min = date.getMinutes();
         let sec= date.getSeconds();
             
          min = formatTime(min);
         sec = formatTime(sec);


        let currentTime = hr + ":" + min + ":" + sec;
       
        time.innerHTML = currentTime;
        console.log(currentTime)

        setInterval(display,1000);
       
}


const formatTime = (value) =>{
        
    if(value<10){
        value = "0" + value;
    }
    return value;
}

button.addEventListener("click" , display);
