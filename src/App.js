import React, { useState,useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import { Button ,TextField} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';


function App() {
  const [todos,setTodos]= useState([]);
  const[input,setInput]= useState([]);

  
  useEffect(() =>
  {
    

    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
      console.log('im working')
      console.log(todos)

      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
    
  },[]);
  



  const add=(event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      //timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput([''])


  }
  return (
    <div className="App">
      <h1>TO DO LIST WEB APP
      </h1>
      <img src={logo} alt="Logo" height='200' width='200' />

      <form>
          <TextField  value='input' id="standard-basic" label="Standard" value={input} onChange={event=>setInput(event.target.value)}/>

        <Button  disabled={!input} type='submit' variant="contained" color="primary" onClick={add}>ADD</Button>

        <ul>
          {todos.map(todo=>(<Todo text={todo}/>))}
          
        </ul>
    </form>
    </div>
  );
}

export default App;
