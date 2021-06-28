import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import uuid from 'uuid/v4';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

function storeTasks({ tasks, completedTasks }) {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify({ tasks, completedTasks })
  );
}

function readStoredTasks() {
  const item = localStorage.getItem(TASKS_STORAGE_KEY);
  return item ? JSON.parse(item) : { tasks: [], completedTasks: [] };
}

function Tasks() {
  const readTasks = readStoredTasks();
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState(readTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    readTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  function updateTaskText(event) {
    setTaskText(event.target.value);
  }

  function addTask() {
    setTasks([...tasks, { taskText, id: uuid() }]);
  }

  function completeTask(completedTask) {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  }

  function deleteTask(task) {
    setCompletedTasks(
      completedTasks.filter((completedTask) => completedTask.id !== task.id)
    );
  }

  return (
    <div>
      <h3>Tasks</h3>
      <Form className="form" inline>
        <FormControl value={taskText} onChange={updateTaskText} />
        <Button onClick={addTask}>Add Task </Button>
      </Form>
      <br />
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} onClick={() => completeTask(task)}>
            {task.taskText}
          </div>
        ))}
      </div>
      <div className="completed-list">
        {completedTasks.map((completedTask) => (
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
