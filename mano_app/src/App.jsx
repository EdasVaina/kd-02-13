import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  return (
    <>
    {error ? <div>
      klaida {error}
    </div>: null}

    <h1>To do list</h1>
    <input type="text" name="" id="text" placeholder='Task' 
    onChange={(e) => {
      setTask(e.target.value);
      }}
      value={task}
    />
    <button onClick={() => {
      setError(null)

      if (task.trim().length == 0) {
        setError("tuscias");
        return;
      }
      if (task.trim().length > 5) {
        setError('daug')
        return;
      }
      setTasks(() => [...tasks, task]);
      setTask("");
      }}
      id='button1'>submit</button>
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
    </>
  )
}

export default App
