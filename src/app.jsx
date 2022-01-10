import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Note from "./Components/note";
import notes from "./notes"; 

function CreateCard(notes) {
    return (
    <Note
    key= {notes.id} 
    title = {notes.title} 
    content={notes.content}/>)
}

function App(){
    return(
        <div>
            <Header />
            {notes.map((CreateCard))}
            <Footer />
        </div>
    );
};

export default App;