const pass=document.getElementById("in");
const p=document.querySelector("p");

const exp= /^(?=.*[A-Z])(?=.*\d).{6,}$/;

pass.addEventListener("input",(e)=>{
  const ans=e.target.value;
  pass.style.outline = "none";
  if(exp.test(ans))
  {
    p.textContent=`Password is strong`
    pass.style.border = "2px solid green";
    p.style.color="green";

  }
  else 
    {
      p.textContent=`Password is weak`;
      pass.style.border = "2px solid red";
      p.style.color="red";
    }
})

