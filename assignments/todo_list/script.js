var totalCount = document.getElementsByClassName("paragraph").length;

function addTodo(){
    
    var inputValue = document.getElementById("todo_input").value;

    var newToDoEle = document.createElement("p")

    newToDoEle.setAttribute("key",totalCount);
    newToDoEle.setAttribute("class","paragraph");
    newToDoEle.innerText = inputValue;

    newToDoEle.onclick = function () {
        this.parentElement.removeChild(this);
    };    

    var getTodo = document.getElementsByClassName("todos");
    
    getTodo[0].appendChild(newToDoEle);
    totalCount+=1;
    
}

