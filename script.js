const taskInput =document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText=taskInput.value.trim();

    if(taskText !== ""){

        const listItem=document.createElement("li");
        listItem.innerHTML = 
        `<span>${taskText}</span>
        <button onclick="deleteTask(this)">
        delete</button>
        `

        taskList.appendChild(listItem);

        taskInput.value = ""

    }

}

function deleteTask(button){
const listItem = button.parentElement;
taskList.removeChild(listItem);
}

// trim -> remove leading whitespace
// create new element ->creareElement("li");
// put it in one list using appendchild
//taskinput.value=""  -> after enter the new word input space become null
//removechild -> delete child
//using "this" keyword indicates that delete specificaly

