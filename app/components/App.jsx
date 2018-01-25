import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

const notes = [
    {id: uuid.v4(),task: 'Learn React'},
    {id: uuid.v4(),task: 'Do laundry'}
];

const new_note = [
    {id: uuid.v4(), task: 'New task'}
];

class App extends React.Component{
    constructor(props){
        super(props);
	
        this.state = {notes:notes}
    }
    render() {
        const {notes} = this.state;
        return (
            <div>
              <button onClick={this.addNote}>+</button>
              <Notes notes={notes} onDelete={this.deleteNote}/>
            </div>
        );
    }
    addNote = () => {
        this.setState({notes: this.state.notes.concat(new_note)});
    }
    deleteNote = (id,e) => {
	e.stopPropagation();

	this.setState({notes: this.state.notes.filter(note => note.id !== id)});
    }
}

export default App;
