const red=document.getElementById("red");
const green =document.getElementById("green");
const blue=document.getElementById("blue");
const colorBox=document.getElementById("colorBox");
const colorCode=document.getElementById("colorCode");

function rest()
{
   const r=red.value;
   const g=green.value;
   const b=blue.value;
   let olor=`rgb(${r},${g},${b})`;
   colorBox.style.backgroundColor=olor;
    colorCode.textContent = olor;
}

red.addEventListener("input",rest)
green.addEventListener("input",
  rest)
blue.addEventListener("input",
  rest)
  rest();