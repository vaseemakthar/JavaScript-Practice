const counter =document.querySelector(".counter button");
const counterP =document.querySelector(".counter p");
counter.addEventListener("click",()=>{
   
    counterP.textContent=fun();

})
let c=0; 
function fun()
{
    
    c++;
    return c;
}
