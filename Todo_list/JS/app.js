const inputField = document.querySelector(".input_form");


function addTask (){
    const taskText = inputField.value.trim();

    if (taskText !== ""){
        const listItems= document.getElementById("task_list")
        const listItem = document.createElement("li");
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove_btn");
        removeBtn.textContent = "REMOVE";

        listItem.textContent = taskText;
        listItem.classList = "text_item";
        listItem.appendChild(removeBtn);
        listItems.appendChild(listItem);

        removeBtn.addEventListener ("click", function(){
                listItem.remove();

        });
       
        

    }
    inputField.value = "";
}

const addButton = document.getElementById("btn");
addButton.addEventListener("click", addTask);

//The remove button is not working.
//and the list style must changed
///the list must be displayed below below the add button