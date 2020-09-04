const input = document.getElementById('input'),
      buttonadd = document.getElementById('add'),
      list = document.getElementById('lists'),
      buttonsort = document.getElementById('sort'),
      data = storage('todo');

let todo = data ? data : [];

buttonadd.addEventListener('click', add);
buttonsort.addEventListener('click', sortByComplete);

if(todo.length){
    show();
}

function show(){
    list.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
        todo[i].date = new Date(todo[i].date);
        list.innerHTML += 
        `<li>${todo[i].completed ? '<s>' : ''}${todo[i].text} | ${todo[i].date}${todo[i].completed ? '</s>' : ''} 
            <button onclick="remove(${i})">🗑️</button>
            <button onclick="edit(${i}, event)">✏️</button>
            <button onclick="completeTask(${i}, event)">✔️</button>
        </li>`
    }
}
function add(){
    let val = input.value;
    todo.push({
        text: val,
        date: new Date(),
        completed: false,
    })
    storage('todo', todo, true);
    show();
}

function edit(index, event){
    let elem = event.target.parentNode;
    elem.innerHTML = `<input type="text" onkeypress="done(${index}, event)">`
}

function done(index, event){
    if (event.which == 13) {
        todo[index].text = event.target.value;
        storage('todo', todo, true);
        show();
    }
}

function remove(index){
    console.log('remove index', index);
    todo.splice(index, 1);
    storage('todo', todo, true);
    show();
}


function completeTask(index){
    todo[index].completed = true;
    storage('todo', todo, true);
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