

class Todo {
    constructor() {
        this.input = document.getElementById('input'),
        this.buttonadd = document.getElementById('add'),
        this.list = document.getElementById('lists'),
        this.buttonsort = document.getElementById('sort'),
        this.data = storage('todo');

        this.todo = data ? data : [];

        if(this.todo.length){
            show();
        }
    }

    show(){
        list.innerHTML = "";
        for (let i = 0; i < this.todo.length; i++) {
            this.todo[i].date = new Date(this.todo[i].date);
            list.innerHTML += 
            `<li>${this.todo[i].completed ? '<s>' : ''}${this.todo[i].text} | ${this.todo[i].date}${this.todo[i].completed ? '</s>' : ''} 
            <button onclick="remove(${i})">🗑️</button>
            <button onclick="edit(${i}, event)">✏️</button>
            <button onclick="completeTask(${i}, event)">✔️</button>
            </li>`
        }
    }

    add(){
        this.val = input.value;
        this.todo.push({
            text: val,
            date: new Date(),
            completed: false,
        })
        storage('todo', todo, true);
        show();
    }
    
    edit(index, event){
        this.elem = event.target.parentNode;
        elem.innerHTML = `<input type="text" onkeypress="done(${index}, event)">`
    }

    done(index, event){
        if (this.event.which == 13) {
            this.todo[index].text = event.target.value;
            storage('todo', todo, true);
            show();
        }
    }

    remove(index){
        console.log('remove index', this.index);
        this.todo.splice(this.index, 1);
        storage('todo', todo, true);
        show();
    }

    completeTask(index){
        this.todo[index].completed = true;
        storage('todo', todo, true);
        show();
    }
    
    storage(name, data = null, set = false){
        if(set){
            this.localStorage.setItem(this.name, JSON.stringify(this.data));
            return true;
        }else{
            return JSON.parse(this.localStorage.getItem(name));
        }
    }
}

let todo = new Todo();

todo.buttonadd.addEventListener('click', add);
todo.buttonsort.addEventListener('click', sortByComplete);