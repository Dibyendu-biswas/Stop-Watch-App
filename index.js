const secound=document.querySelector(".sec")
const miliSeconds=document.querySelector(".milisec")
const reset=document.querySelector(".reset")
const start=document.querySelector(".start")
const stop=document.querySelector(".stop")


let sec=00;
let mili=00;
let timeinterval;
const time=()=>{
   mili++
if(mili<9){
   miliSeconds.innerHTML="0"+mili
}if(mili>9){
   miliSeconds.innerHTML=mili
}
if(mili>60){
   sec++
   secound.innerHTML="0"+sec
   mili=0
   miliSeconds.innerHTML="0"+0
}if(sec>9){
   secound.innerHTML=sec
}

}

start.addEventListener("click",()=>{
    timeinterval=setInterval(time,10)

})
stop.addEventListener("click",()=>{
    clearInterval(timeinterval)
})
reset.addEventListener("click",()=>{
    clearInterval(timeinterval)
    sec="00"
    mili="00"
    secound.innerHTML=sec;
    miliSeconds.innerHTML=mili;
})