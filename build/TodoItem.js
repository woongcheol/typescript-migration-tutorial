"use strict";
// 변환한 모듈을 CommonJS 환경에서도 ES6 형태로 인식하도록 설정
Object.defineProperty(exports, "__esModule", { value: true });

class TodoItem {
  constructor(id, task, complete) {
    this.id = id;
    this.task = task;
    this.complete = complete;
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
exports.default = TodoItem;
