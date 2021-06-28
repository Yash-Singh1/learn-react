import React, { useEffect, useState, useReducer } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import uuid from 'uuid/v4';

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK'
};

const initialTasksState = {
  tasks: [],
  completedTasks: []
};

const tasksReducer = (state, action) => {
  console.log('reducer here', state, action);
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };

    case TYPES.COMPLETE_TASK:
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.completedTask],
        tasks: state.tasks.filter((task) => task.id !== action.completedTask.id)
      };

    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter(
          (completedTask) => completedTask.id !== action.task.id
        )
      };

    default:
      return state;
  }
};

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

function storeTasks({ tasks, completedTasks }) {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify({ tasks, completedTasks })
  );
}

function readStoredTasks() {
  const item = localStorage.getItem(TASKS_STORAGE_KEY);
  return item ? JSON.parse(item) : initialTasksState;
}

function Tasks() {
  const [taskText, setTaskText] = useState('');

  const [state, dispatch] = useReducer(tasksReducer, readStoredTasks());

  console.log(state);

  useEffect(() => {
    storeTasks(state);
  });

  function updateTaskText(event) {
    setTaskText(event.target.value);
  }

  function addTask() {
    dispatch({ type: TYPES.ADD_TASK, task: { taskText, id: uuid() } });
  }

  function completeTask(completedTask) {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask });
  }

  function deleteTask(task) {
    dispatch({ type: TYPES.DELETE_TASK, task });
  }

  return (
    <div>
      <h3>Tasks</h3>
      <Form className="form" inline>
        <FormControl value={taskText} onChange={updateTaskText} />
        <Button onClick={addTask}>Add Task </Button>
      </Form>
      {state.completedTasks.length > 0 || state.tasks.length > 0 ? (
        <br />
      ) : null}
      <div className="task-list">
        {state.tasks.map((task) => (
          <div key={task.id} onClick={() => completeTask(task)}>
            {task.taskText}
          </div>
        ))}
      </div>
      <div className="completed-list">
        {state.completedTasks.map((completedTask) => (
          <div key={completedTask.id}>
            <strike>{completedTask.taskText}</strike>{' '}
            <span
              className="delete-task"
              onClick={() => deleteTask(completedTask)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
