const input = document.getElementById('input'),
      buttonadd = document.getElementById('add'),
      list = document.getElementById('lists'),
      data = storage('todo');

let todo = data ? data : [];

buttonadd.addEventListener('click', add);

if(todo.length){
    show();
}
function show(){
    list.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
        list.innerHTML += `<li>${todo[i]}</li>`
    }
}
function add(){
    let val = input.value;
    todo.push(val)
    storage('todo', todo, true);
    show();
}
function edit(){
    show();
}
function remove(){
    show();
}
function storage(name, data = null, set = false){
    if(set){
        localStorage.setItem(name, JSON.stringify(data));
        return true;
    }else{
        return JSON.parse(localStorage.getItem(name));
    }
}