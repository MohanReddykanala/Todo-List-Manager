const addform=document.querySelector(".add");
const tasks=document.querySelector(".tasks")
const clearall=document.querySelector(".clear");
const updatecount=document.querySelector(".message-box span");
const searchtask=document.querySelector(".search");


function updatetaskcount(){
    const tasklength=tasks.children.length;
    updatecount.textContent=`You have ${tasklength} pending tasks`
}

updatetaskcount();
addform.addEventListener("submit",event=>{
    event.preventDefault();
    const value=addform.task.value.trim();
    
    if(value.length){
        tasks.innerHTML+=`<li>
                              <span>${value}</span>
                              <i class="bi bi-trash3 delete"></i>
                         </li>`
        addform.reset();
        updatetaskcount();
    }

})


tasks.addEventListener("click",event=>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updatetaskcount();
    }
})


clearall.addEventListener("click",event=>{
    const taskitems=tasks.querySelectorAll("li");
    taskitems.forEach(item=>{
        item.remove();
    })
    updatetaskcount();
})

function filtertask(term){
    Array.from(tasks.children)
    .filter(task=>{
        return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task=>{
        task.classList.add("hide");
    })

    Array.from(tasks.children)
    .filter(task=>{
        return task.textContent.toLowerCase().includes(term);
    })
    .forEach(task=>{
        task.classList.remove("hide");
    })
}

searchtask.addEventListener("keyup",event=>{
    const term=searchtask.task.value.trim().toLowerCase();
    filtertask(term);
})


searchtask.addEventListener("click",event=>{
    if(event.target.classList.contains("reset")){
        searchtask.reset();
        const term=searchtask.task.value.trim();
        filtertask(term);
    }
})

