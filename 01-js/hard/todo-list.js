class Todo {
  constructor() {
    console.log("Initializing constructor");
    this.list = [];
    console.log("Constructor initialized");
  }

  add(todo){
    console.log("Adding todo:", todo);
    this.list.push(todo);
    console.log("Todo added:", todo);
  }

  remove(index) {
    console.log("Removing todo at index", index);
    this.list.splice(index , 1);
    console.log("Todo removed at index", index);
  }

  update(index, updatedTodo){
    if(index>= this.list.length){
      console.log("Invalid index");
      return;
    }
    console.log("Updating todo at index", index, "with", updatedTodo);
    this.list[index] = updatedTodo;
    console.log("Todo updated at index", index, "with", updatedTodo);
  }

  getAll(){
    console.log("Getting all todos");
    return this.list;
  }

  get(index){
    if(index>= this.list.length){
      console.log("Invalid index");
      return null;
    }
    console.log("Getting todo at index", index);
    return this.list[index];
  }

  clear(){
    console.log("Clearing all todos");
    this.list = [];
    console.log("Todos cleared");
    return this.list;
  }
}

module.exports = Todo;

