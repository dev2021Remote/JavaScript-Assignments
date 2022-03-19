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

var totalCount = document.getElementsByClassName("paragraph").length;

function handleChange(){
    if(document.getElementById("option").value === "Complete"){
        document.getElementById("complete_todos").style.display="block";
        document.getElementById("pending_todos").style.display="none";
    }else{
        document.getElementById("complete_todos").style.display="none";
        document.getElementById("pending_todos").style.display="block";
    }
    
}

// function addTodo(){
    
//     var inputValue = document.getElementById("todo_input").value;

//     var newToDoEle = document.createElement("p")

//     newToDoEle.setAttribute("key",totalCount);
//     newToDoEle.setAttribute("class","paragraph");
//     newToDoEle.innerText = inputValue;

//     newToDoEle.onclick = function () {
//         this.parentElement.removeChild(this);
//     };    

//     var getTodo = document.getElementsByClassName("todos");
    
//     getTodo[0].appendChild(newToDoEle);
//     totalCount+=1;
    
// }

