// var list = document.getElementById("lis");

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext);

    //create the delete button
    var delbtn = document.createElement("button");
    var textbtn = document.createTextNode("Delete");
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deletebtn(this)")
    delbtn.appendChild(textbtn)
    li.appendChild(delbtn)

    //create the edit button
    var editbtn = document.createElement('button');
    var edittext = document.createTextNode('Edit');
    editbtn.setAttribute("class", "btn")
    editbtn.setAttribute("onclick", "editbtn(this)")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)

    lis.appendChild(li);
    todo_item.value = ''
}

function deletebtn(e){
    e.parentNode.remove()
}

function deleteAll(){
    lis.innerHTML = "";
}

function editbtn(e){
    var val = prompt('enter your value', e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}