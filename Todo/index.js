let inputbox=document.querySelector(".inputbox");
let Addbtn=document.querySelector(".Addbtn");
let todoHolder=document.querySelector(".todoHolder");
let editBox=document.querySelector(".editBox");
let saveBtn=document.querySelector("savebtn");
Addbtn.addEventListener("click",addTodos);
function addTodos(){
    let inputValue=inputbox.value;
    if(inputValue)
    {
        let div=document.createElement("div");
        div.className="todos";
        div.style.borderBottom="1px solid grey";
    let divIcon=document.createElement("div");
    divIcon.className="icon";
    let taskInput=document.createElement("input");
    taskInput.className="inputEdit";
    taskInput.value=inputValue;
    taskInput.setAttribute('readonly','readonly');
    let divButton=document.createElement("div");
    divButton.className="buttnflex";
    let editButton=document.createElement("button");
    editButton.className="editbtn";
    editButton.innerText=`Edit`;
    let deleteButton=document.createElement("button");
    deleteButton.classList.add("delbtn","editbtn");
    deleteButton.innerHTML=`<i class="fa-solid fa-trash">`;
    divButton.append(editButton,deleteButton);
    div.append(divIcon,taskInput,divButton);      
        todoHolder.append(div);
        inputbox.value="";
        editButton.addEventListener("click",()=>{
            if(editButton.innerText=='Edit'){
            taskInput.removeAttribute('readonly');
            taskInput.focus();
                editButton.innerText="Save";
            }else{
                taskInput.setAttribute('readonly','readonly');
                editButton.innerText="Edit";
            }
        })
        deleteButton.addEventListener("click",()=>{
            todoHolder.removeChild(div);
        })
    }else{
        alert("Please Enter some task");
    }
 }