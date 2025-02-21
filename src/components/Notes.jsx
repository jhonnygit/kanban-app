import { v4 as uuidv4 } from 'uuid';

/* const notes = [
    {
        id:uuidv4(),
        task: 'Learn React'
    },
    {
        id:uuidv4(),
        task: 'Do laundry'
    }
]; */

export default ({notes}) => (
    <ul>{notes.map(note =>
        <li key={note.id}>{note.task}</li>
    )}
    </ul>
)