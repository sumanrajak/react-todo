import React from 'react';
import'./Todo.css';
import { List,ListItem,ListItemText} from '@material-ui/core';
import logo from './logo.png';


function Todo(props) {
    return (
        <div className='tod'>
            <list>
            <ListItem>
  <ListItemText primary={props.text} secondary='to do' />
</ListItem>
            </list>
            
        </div>
    )
}

export default Todo
