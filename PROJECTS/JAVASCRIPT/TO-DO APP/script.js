
let todoInput= document.getElementById('todoInput');

function removeTodo(id){
    let div= document.getElementById(id)
    div.remove();
}
let id=1;

document.getElementById("addbtn").addEventListener('click', (e) => {
    e.preventDefault();
    const todoText = todoInput.value; 
    let div= document.createElement('div')
    div.setAttribute('class', 'single')
    div.setAttribute("id", id)
    div.innerHTML= 
    `<h2>${todoText}</h2>
        <input type="checkbox">
        <button onclick= removeTodo(${id})>Remove TO-DO</button>
    `
    document.getElementById("alltodo").appendChild(div);
    id++;
    todoInput.value= ' ';
});
