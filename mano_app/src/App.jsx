import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  return (
    <>
    {error ? <div>
      ⛔ Klaida {error}
    </div>: null}

    <h1 id='title'>TO DO LIST 😎</h1>
    <input type="text" name="" id="text" placeholder='Please Enter a Task' 
    onChange={(e) => {
      setTask(e.target.value);
      }}
      value={task}
    />
    <button onClick={() => {
      setError(null)

      if (task.trim().length == 0) {
        setError("Negali Buti Tuscias");
        return;
      }
      if (task.trim().length > 20) {
        setError('Maziau nei 20')
        return;
      }
      setTasks(() => [...tasks, task]);
      setTask("");
      }}
      id='button1'><i>Submit</i></button>
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
    </>
  )
}

export default App
