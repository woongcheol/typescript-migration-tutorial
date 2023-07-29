class TodoItem {
  constructor(id, task, complete) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetails() {
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
    );
  }
}

const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "요리하기", complete: false },
];

let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);

console.log(todoItem);
console.log(typeof todoItem);

for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}
