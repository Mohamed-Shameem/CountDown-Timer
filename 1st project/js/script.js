const days =document.querySelector("#days")
const hours =document.querySelector("#hours")
const minutes =document.querySelector("#minutes")
const seconds =document.querySelector("#seconds")

function counting(){
const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 1 ${currentYear + 1} 00:00:00`)
const currentDate = new Date()
differnce = nextYear - currentDate;

const d = Math.floor(differnce/1000/60/60/24);
const h = Math.floor(differnce/1000/60/60)%24;
const m = Math.floor(differnce/1000/60)%60;
const s = Math.floor(differnce/1000)%60;

days.innerHTML =d<10 ? "0"+d : d
hours.innerHTML =h<10 ? "0"+h : h;
minutes.innerHTML =m<10 ? "0"+m : m;
seconds.innerHTML =s<10 ? "0"+s : s; 
}
setInterval(counting,1000)



