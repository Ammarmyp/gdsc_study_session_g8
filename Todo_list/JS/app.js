const inputField = document.querySelector(".input_form");

function addTask() {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const listItems = document.getElementById("task_list");
        const listItem = document.createElement("li");
        
        listItem.textContent = taskText;
        listItem.classList.add("text_item");
        
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove_btn");
        removeBtn.textContent = "REMOVE";

        removeBtn.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(removeBtn);
        listItems.appendChild(listItem);
    }

    inputField.value = "";
}

const addButton = document.getElementById("btn");
addButton.addEventListener("click", addTask);
