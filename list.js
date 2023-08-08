let inputBox = document.getElementById("text")
let task = document.getElementById("task")

addTask = () =>{
 if(inputBox.value === ""){
     alert("Please write something")
 }
 else{
     let li = document.createElement("li")
     li.innerText = inputBox.value;
     task.appendChild(li)
     let span = document.createElement("span")
     span.innerHTML = "\u00d7"
     li.appendChild(span)
     save()
 }
 inputBox.value = "";
}

task.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
     e.target.classList.toggle("tick")
 }
 else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove()
     save();
 }
} )

save = () => {
 localStorage.setItem("tata" ,task.innerHTML)
}

showTask = () => {
 task.innerHTML = localStorage.getItem("tata")
}

showTask()