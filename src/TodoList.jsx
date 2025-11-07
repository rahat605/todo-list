import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((previousTodos) => {
      return [...previousTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let lowerCaseAll = () => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  let doneTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let NdoneTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: false,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let doneAll = () => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let notDoneAll = () => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        return {
          ...todo,
          isDone: false,
        };
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            addNewTodo();
          }
        }}
      />
      <br />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <h4>Task List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
  <span
    style={
      todo.isDone
        ? {
            textDecorationLine: "line-through",
            textDecorationThickness: "3px",
            fontWeight: "bold",
          }
        : {}
    }
  >
    {todo.task}
  </span>
  <div className="todo-buttons">
    <button onClick={() => doneTodo(todo.id)}>
      <i className="fa-solid fa-check"></i>
    </button>
    <button onClick={() => notDoneAll(todo.id)}>
      <i className="fa-solid fa-xmark"></i>
    </button>
    <button onClick={() => deleteTodo(todo.id)}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  </div>
</li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={lowerCaseAll}>LowerCase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={doneAll}>Check All as Done</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={notDoneAll}>Uncheck All</button>
    </div>
  );
}
