import { NewNoteInput } from './components/NewNote/NewNoteInput';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './store/notes/reducer';
import { addNote } from './store/notes/actions';

function App() {
    // primer valor el tipo, y el segundo el tipo de lo k va devolver
    const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes);
    //update
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note))
    }

    return (
        <>
            <NewNoteInput addNote={onAddNote} />
            <hr />
            <ul>
                {notes.map((note) => {
                    return <li key={note}>{note}</li>
                })}
            </ul>
        </>
    );
}

export default App;
