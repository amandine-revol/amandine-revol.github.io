
//https://data-flair.training/blogs/javascript-project-to-do-list/

//Add new iteam to list
function newElement(){
    var valueInput = document.getElementById("myInput");
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === ''){
        alert("Write something");
    }else{
        //create li
        var li = document.createElement("li");
        //create checkbox
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        //insert checkbox inside li
        li.appendChild(checkbox);

        //recup user input et le met dans span
        var t = document.createTextNode(inputValue);
        var span = document.createElement("span");
        span.setAttribute("class", "task");
        span.appendChild(t);

        li.appendChild(span);

        //cree close
        var x = document.createTextNode("x");
        var close = document.createElement("span");
        close.setAttribute("class", "delete");
        close.setAttribute("onclick", "closeTab()");

        close.appendChild(x);

        li.appendChild(close);

        document.getElementById("list").appendChild(li);

        //clear input
        valueInput.value="";
    }
}
//delete item
function closeTab(){
    var close = document.getElementsByClassName("delete");

    var i;
    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var li= this.parentElement;
            li.style.display = "none";
        }
    }
}
//clear all
var clearAll = document.getElementById("clear");
clearAll.onclick = function(){
    var taskBoardUl = document.getElementById("list");
    taskBoardUl.innerHTML = "";
}
//before refresh page save list tasks
window.onbeforeunload = function(){
    var list = document.querySelector("#list").innerHTML;

    if(list !== null) {
        sessionStorage.setItem('tasksList', list);
    }
};
//quand recharge 
window.onload = function() {
    var list = sessionStorage.getItem("tasksList");

    if(list !== null) {
    document.getElementById('list').innerHTML = list;
      } else{
    document.getElementById('list').value = "";
    }
};

