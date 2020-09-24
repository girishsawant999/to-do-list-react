import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Task from './Components/Task';
import uuid from 'react-uuid';
import { ApplePaySession } from 'braintree-web';

function App() {
  const [tasks, settasks] = React.useState(
    localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : []
  );

  if (window.ApplePaySession) {
    var merchantIdentifier = 'merchant.com.lego.saudiblocks';
    var promise = ApplePaySession.canMakePaymentsWithActiveCard(
      merchantIdentifier
    );
    promise.then(function (canMakePayments) {
      if (canMakePayments) {
        console.log('canMakePayments :>> ', true);
      } else {
        console.log('canMakePayments :>> ', false);
      }
    });
  } else {
    console.log('window.ApplePaySession :>> ', window.ApplePaySession);
  }

  const addTask = (task) => {
    let new_task = [
      ...tasks,
      {
        id: uuid(),
        value: task,
        status: false,
      },
    ];

    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };

  const deleteTask = (id) => {
    let new_task = tasks.filter((task) => task.id !== id);
    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };

  const changeStatus = (id) => {
    let new_task = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };
  return (
    <div className="App">
      <AddTask addTask={addTask} />
      <div className="app__tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
