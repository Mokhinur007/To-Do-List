let inputText = document.getElementById("input_text");
let registerBtn = document.getElementById("register_btn");
let list = document.getElementById("list");


registerBtn.addEventListener("click", () => {
  let value = inputText.value;

  let eror = document.getElementById("error");
  let erorImg = document.getElementById("error_img");
  let back = document.getElementById('back')
  let concel = document.getElementById("btn_one")
  let again = document.getElementById("btn_two")

  if (value == "") {
    eror.classList.add("error_see");
    back.classList.add("back_see")
    
    erorImg.addEventListener("click", () => {
      eror.classList.remove("error_see");
      back.classList.remove("back_see")

      
    });
    again.addEventListener("click", () => {
      eror.classList.remove("error_see");
      back.classList.remove("back_see")

      
    });

    concel.addEventListener("click", () => {
      eror.classList.remove("error_see");
      back.classList.remove("back_see")
    });

    
  
  } else {
    list.innerHTML += `
    <li id="list_item">
      <span id ="todo_text">${value}</span>
      <div class="btn">
        <button id ="item_delete">delete</button>
        <button id="item_edit_btn" class="item_edit_btn">edit</button>
      </div>
   </li>`;
  }

  inputText.value = null;

  let listItem = document.querySelectorAll("#list_item");
  let ItemDelete = document.querySelectorAll("#item_delete");
  let ItemEditBtn = document.querySelectorAll("#item_edit_btn");

  listItem.forEach((listitem, key1) => {
    ItemDelete.forEach((itemdelete, key2) => {
      itemdelete.addEventListener("click", () => {
        if (key1 == key2) {
          listitem.style.display = "none";
        }
      });

      let modal = document.getElementById("modal");
      let modalInput = document.getElementById("modal_input");
      let modalBtn = document.getElementById("modal_btn");
      let todoText = document.querySelectorAll("#todo_text");

      ItemEditBtn.forEach((itemedit, key3) => {
        itemedit.addEventListener("click", () => {
          modal.classList.add("modal_see");
          todoText.forEach((text, key4) => {
            if (key1 == key4) {
              modalInput.value = text.innerHTML;
            }
            modalBtn.addEventListener("click", () => {
              if (key3 == key4) {
                text.innerHTML = modalInput.value;
                modal.classList.remove("modal_see");
                inputText.value = null
              }
            });
          });
        });
      });
    });
  });
});

