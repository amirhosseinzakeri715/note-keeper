import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import "./styles.css";


function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes(prevNotes => [...prevNotes, note]);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter(note => note.id !== id);
        });
    }


    return(
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map(note => {
                return (
                    <Note 
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                );
                })}  
            <Footer />
        </div>
    );

}

export default App;