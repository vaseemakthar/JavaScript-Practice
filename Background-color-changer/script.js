// const heading=document.querySelector("h1");
// console.log(heading);
// const newHead=heading.textContent="Hello, Vaseem";

// const contentLen=document.querySelector(".container .card");
// console.log(contentLen);

// const contentLenF=contentLen.querySelectorAll(".card");
// console.log(contentLenF);
// console.log(contentLenF.length);

// contentLen.addEventListener("click",(event)=>{
//   const text=event.target.textContent;
//     event.target.textContent =
//     text === "Card 1" ? "clicked" :
//     text === "Card 2" ? "clicked" :
//     text === "Card 3" ? "clicked" :
//     text === "clicked" ? "Card 1" : text;
// })

// const contentLenZ=document.querySelectorAll(".container .card");
// console.log(contentLenZ);
// console.log(contentLenZ.length);

// const changeColor=document.querySelectorAll(".card");
// console.log(changeColor);
// // const changeColor2=changeColor.style.backgroundColor="red";


// changeColor.forEach((el)=>{
//    el.style.backgroundColor="red";
//    el.style.padding="30px";
// });


// const changSepecial=document.querySelector(".special");
// console.log(changSepecial);
// changSepecial.style.color="purple";

// const getIn=document.getElementById("inputField");
// getIn.addEventListener("input", (event)=>{
//   console.log(event.target.value);

// })

// const boxCont=document.querySelectorAll(".container .box");
//  console.log(boxCont);
// boxCont.forEach((el)=>{
//     el.addEventListener("click",(event)=>{
//         el.classList.toggle("active1");
//         event.target.textContent="clicked";
//         // el.style.backgroundColor="blue";
//     })
// })

// const bubling=document.querySelector(".bub");
// bubling.addEventListener("click",()=>{
//      bubling.style.backgroundColor="pink";
// })
// const bubling1=document.querySelector(".bub .bubble");
// bubling1.addEventListener("click",()=>{
//      bubling1.style.backgroundColor="yellow";
// })
// const bubling2=document.querySelector(".bub .bubble p");
// bubling2.addEventListener("click",(en)=>{
//   console.log(en);
//      en.target.textContent="clicked";
// })

const clBut=document.querySelector(".bub");
const cliBut=document.querySelector(".bub button");
const cBut=document.querySelector(".bub p");
cliBut.addEventListener("click",()=>{
  let ranColor= getRan();
   clBut.style.backgroundColor=ranColor;
   cliBut.style.backgroundColor=ranColor;
   cBut.textContent="BackGround- color: "+ranColor;
})

function getRan(){
      const letters = "0123456789ABCDEF";
      let color = "#";
      for(let i=0;i<6;i++)
      {
        color+=letters[Math.floor(Math.random()*16)];
      }
      return color;
}