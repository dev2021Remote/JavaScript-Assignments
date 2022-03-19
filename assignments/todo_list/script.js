var array =[];


async function loadtodo(){
    var fetches = fetch("https://jsonplaceholder.typicode.com/todos");
    await fetches.then((res)=>res.json())
        .then(obj=>{
    
            array=obj;
        })
        .then(()=>{

            var completeTodo = document.getElementById("complete_todos");
            var pendingTodo = document.getElementById("pending_todos");
            var newToDoEle;
            for(let i=0;i<array.length;i++){
        
                newToDoEle = document.createElement("p");
                newToDoEle.setAttribute("key",array[i]["id"]);
                newToDoEle.setAttribute("class","paragraph");
        
                newToDoEle.innerText = array[i]["title"];
        
                newToDoEle.onclick = function () {
                    this.parentElement.removeChild(this);
                };    
        
                if(array[i]["completed"]){
                    completeTodo.appendChild(newToDoEle)
                }
                else{
                    pendingTodo.appendChild(newToDoEle)
                }
        
            }
        })
    


}

function handleChange(){
    if(document.getElementById("option").value === "Complete"){
        document.getElementById("complete_todos").style.display="block";
        document.getElementById("pending_todos").style.display="none";
    }else{
        document.getElementById("complete_todos").style.display="none";
        document.getElementById("pending_todos").style.display="block";
    }
    
}

