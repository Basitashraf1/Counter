count=0;
const btni=document.getElementById("buttonincrement");
const he=()=>{
  count+=1;
  document.getElementById("counter").innerText=count;  
}
btni.addEventListener("click",he);

const btnd=document.getElementById("buttondecrement");
const hey=()=>{
  count-=1;
  document.getElementById("counter").innerText=count;  
}
btnd.addEventListener("click",hey);

const btnr=document.getElementById("reset");
const hi=()=>{
  count=0;
  document.getElementById("counter").innerText=count;  
}
btnr.addEventListener("click",hi);

