"use strict";

const todos = [];
const comment = document.getElementById("comment");
const table = document.getElementById("table-contents");

const addtable = () => {
    const todo = { task: comment.value, status: "作業中", deletion: "削除" };
    todos.push(todo);
    listdescription();
}

const listdescription = () => {
    table.innerHTML = "";
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;

        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;

        let newRow = table.insertRow();
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(index);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(value.task);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newCell.appendChild(statusbtn);

        newCell = newRow.insertCell();
        newCell.appendChild(deletebtn);

        deletebtn.addEventListener("click", () => {
            todos.splice(index, 1);
            listdescription();
        });

        statusbtn.addEventListener("click", () => {
            if(value.status === "作業中") {
                todos[index].status = "完了";
                listdescription();
            } else {
                todos[index].status = "作業中";
                listdescription();  
            }
        });
    });
    comment.value = "";
}