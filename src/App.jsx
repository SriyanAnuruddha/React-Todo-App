import { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Task from './components/Task';
import { v4 as uuid } from 'uuid';

function App() {

  const [tasks,setTasks] = useState([])

  const [input,setInput] = useState("")

  function onChangeHandler(e){
    const {name,value} = e.target
    setInput(value)

  }

  function handleOnClickAddTaskBtn(){
    setTasks(prevTasks=>[...prevTasks,{taskId:uuid(),task:input,isCompleted:false}])
    setInput("")
  }
  
  function completeTask(taskId){
    setTasks(prevTasks => {
      return prevTasks.map(task=>{
        if(taskId === task.taskId){
          return {...task,isCompleted:true}
        }else{
          return task
        }
      })
    })
  }

  console.log(tasks)

  return (
    <div className='main-container bg-secondary'>
      <Card className='mt-5' style={{ width: '18rem'}}>
      <Card.Body>
        <Card >
          <ListGroup>
          { tasks.length ===0 ? <h1>No tasks left!</h1> : tasks.map((task,i) => < Task taskId={task.taskId} key={task.taskId} task={task.task} isCompleted={task.isCompleted} completeTask={completeTask}/>)}
          </ListGroup>
        </Card>
        <InputGroup className="my-3">
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={onChangeHandler}
            value={input}
          />
          <Button onClick={handleOnClickAddTaskBtn} variant="outline-secondary" id="button-addon1">
            Add Task
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
    </div>
  )
}

export default App
