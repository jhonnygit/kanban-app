import react from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Notes from './components/Notes';



export default class App extends react.Component {
  
  constructor(props){
    super(props);
    this.state ={
      notes:[
        {
            id:uuidv4(),
            task: 'Learn React'
        },
        {
            id:uuidv4(),
            task: 'Do laundry'
        }
      ]
    };
  }
  render(){
    const {notes} = this.state
    return (
      <div className="App">
        <button onClick={()=>console.log('añaidr nota')}>+</button>
        <Notes notes={notes}/>
      </div>
    );
  }
}


