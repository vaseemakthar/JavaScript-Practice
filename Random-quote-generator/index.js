const qout=document.querySelector(".head p");
const qout1=document.querySelector(".head button");

const quotes = [
  "Believe in yourself and all that you are.",
  "Do something today that your future self will thank you for.",
  "Every day is a second chance.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is not for the lazy.",
  "Dream it. Wish it. Do it.",
  "Small steps every day lead to big results.",
  "Stay positive, work hard, make it happen.",
  "Great things never come from comfort zones.",
  "Don’t watch the clock; do what it does. Keep going."
];
function us(){
   const ans=Math.floor(Math.random()*10);
   qout.textContent=`Qoute: ${quotes[ans]}`;
}

 qout1.addEventListener("click",us);


setInterval(us,1000);
us();