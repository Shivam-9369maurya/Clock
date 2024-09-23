const time=document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showtime,1000);
});
let showtime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr>10 ? `${hr}`: hr;
    min = min>10 ? `${min}`: min;
    sec = sec>10 ? `${sec}`: sec;

    time.innerHTML = `${hr} : ${min} : ${sec}`;

    timeformat.innerHTML = hr>12 ? "PM" : "AM";
}