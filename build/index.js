// Strict 모드 적용, 코드의 오류 발견이 쉬우며 일부 자바스크립트의 기능을 제한해 안전한 개발 유도
"use strict";

// ES6 모듈을 CommonJS 형태로 변환할 때 사용되는 코드
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

// 변환한 모듈을 CommonJS 환경에서도 ES6 형태로 인식하도록 설정
Object.defineProperty(exports, "__esModule", { value: true });

// CommonJS 형태의 모듈 시스템에서 ES6 모듈을 가져오기 위해 사용되는 방식
const TodoItem_1 = __importDefault(require("./TodoItem"));

const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "요리하기", complete: false },
];
console.log("My Todo List");
for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem_1.default(
    data[i].id,
    data[i].task,
    data[i].complete
  );
  todoItem.printDetails();
}
