

  //  but.addEventListener("click",()=>{
  //   const p=inpu.value.trim();
  //   if(p==="") 
  //   {
  //     alert("give task!");
  //     return;
  //   }
  //   const li=document.createElement("li");

  //   const span=document.createElement("span");
  //   span.textContent=p;

  //   const btn=document.createElement("button");
  //   btn.innerHTML = '<i class="fas fa-check"></i>';
  //   const btn1=document.createElement("button");
  //   btn1.innerHTML='<i class="fas fa-trash"></i>';
  //   const btn2 = document.createElement("button");
  //   btn2.innerHTML = '<i class="fas fa-pen"></i>';

  //   li.appendChild(span);
  //   li.appendChild(btn);
  //   li.appendChild(btn1);
  //   li.appendChild(btn2);
  //   List.appendChild(li);
  //   // localStorage.setItem('task',span.textContent)
  //   // const save=localStorage.getItem('task')
    
  //   btn.addEventListener("click",()=>{
  //       li.style.textDecoration==="line-through"?
  //       li.style.textDecoration="none":li.style.textDecoration="line-through";
  //   })
  //   btn1.addEventListener("click",()=>{
  //       li.remove();
  //   })
  //   btn2.addEventListener("click",()=>{
  //       const input=document.createElement("input");
  //       input.type="text";
  //       input.value=span.textContent;
  //       input.classList.add("edit-input");
  //       li.replaceChild(input, span); 
  //       input.focus();
            
  //       input.addEventListener("keydown",(e)=>{
  //          if(e.key==="Enter")
  //          {
  //             const newValue=input.value;
  //             if(newValue!="")
  //             {
  //               span.textContent=newValue;
  //               li.replaceChild(span,input); 
  //             }
  //          }
  //       })
        

  //   })
  //   inpu.value="";
  //   // if(save!=="") span.textContent=save;
  //  }
  // )
  

const inpu=document.querySelector(".inp-todo");
const but=document.querySelector("button");
const List=document.querySelector(".list");

document.addEventListener("DOMContentLoaded",()=>{
    const tasks=JSON.parse(localStorage.getItem('tasks'))||[]
    tasks.forEach(task => addTask(task))
      
});

but.addEventListener("click",()=>{
      const p=inpu.value.trim();
      if(p==="")
      {
        alert("give task!")
         return;
      }
      addTask(p);
      saveTask(p);
      inpu.value=""
}) 

function saveTask(task)
{
   const tasks=JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks",(JSON.stringify(tasks)))
}

function addTask(task)
{
  const li= document.createElement("li");
  const span=document.createElement("span")
  span.textContent=task

   const btn = document.createElement("button");
    btn.innerHTML = '<i class="fas fa-check"></i>';

    const btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="fas fa-trash"></i>';

    const btn2 = document.createElement("button");
    btn2.innerHTML = '<i class="fas fa-pen"></i>';

    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(btn1);
    li.appendChild(btn2);
    List.appendChild(li);

      btn.addEventListener("click", () => {
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    btn1.addEventListener("click", () => {
        li.remove();
        removeTask(span.textContent);
    });

     btn2.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.classList.add("edit-input");
        li.replaceChild(input, span);
        input.focus();

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const newValue = input.value.trim();
                if (newValue !== "") {
                    updateTask(span.textContent, newValue);
                    span.textContent = newValue;
                    li.replaceChild(span, input);
                }
            }
        });
    });
}


function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(oldText, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(oldText);
    if (index !== -1) {
        tasks[index] = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}