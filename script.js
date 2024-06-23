const button = document.querySelector(".btn");
const time = document.querySelector(".time");

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

      
       
}
const clockTime = () =>{
    setInterval(display,1000);
    time.classList.toggle("show");
}


const formatTime = (value) =>{
        
    if(value<10){
        value = "0" + value;
    }
    return value;
}

button.addEventListener("click" , clockTime);
