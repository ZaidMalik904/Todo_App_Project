let Todo = document.querySelector("#addTodo");
let inputEl = document.querySelector("#name");

const handle = () => {
  console.log("Hello");
  const divElement = document.createElement("div");
  divElement.innerHTML = `<br><p>${inputEl.value}</p> <button class="deletebtn">Delete</button>`;
  Todo.append(divElement);


  divElement.querySelector(".deletebtn").addEventListener("click", () => {
    divElement.remove();
  });

  Todo.append(divElement);
};

document.querySelector(".btn").addEventListener("click", handle);