import { useEffect, useState } from "react";

function DigitalClock(){

    const[time,setTime]=useState(new Date());
    
    useEffect(() =>{
       const intervalId =setInterval(()=>{
            setTime(new Date());
       },1000);
//clear the interval
       return()=>{
        clearInterval(intervalId);
       }

    },[]);

function formatTime(){
    let hours = time.getHours();
    let minites = time.getMinutes();
    let seconds = time.getSeconds();
    const meridian = hours>=12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    return `${padZero(hours)}:${padZero(minites)}:${padZero(seconds)} ${meridian}`;

}

function padZero(number) {
   return number < 10 ? `0${number}` : number;
}

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock