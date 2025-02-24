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

  addNote =() =>{
    this.setState({
      notes:this.state.notes.concat([{
        id:uuidv4(),
        task: 'new task'
      }])
    })
  }

  deleteNote = (id,e)=>{
    //deja eventos en proceso
    e.stopPropagation();
    this.setState({
      notes:this.state.notes.filter(note=>note.id !==id)
    });  
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note=>{
        if(note.id === id){
          note.editing = true;
        }
        return note;
      })
    })
  }

  editNote = (id,task) => {
    this.setState({
      notes: this.state.notes.map(note=>{
        if(note.id === id){
          note.editing =false;
          note.task = task;
        }

        return note;
      })
    })
  }

  render(){
    const {notes} = this.state
    return (
      <div className="App">
        <button onClick={this.addNote}>+</button>
        <Notes 
          notes={notes} 
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          
          />
      </div>
    );
  }
}


