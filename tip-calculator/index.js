const text=document.getElementById("t");
const text1=document.getElementById("t1");
const a=document.querySelector(".ans");
const apt=document.querySelector("button");
apt.addEventListener("click",()=>{
   a.innerHTML="";
   const x=parseFloat(text.value);
   const y=parseFloat(text1.value);
   const tipAmount= (x*y)/100;
   const totalAmount =x+tipAmount;
  const content=document.createElement('p');
  const content1=document.createElement('p');
  content.textContent=tipAmount;
  content1.textContent=totalAmount;
  a.appendChild(content);
  a.appendChild(content1);
  

})