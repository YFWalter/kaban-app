import React from 'react';
import Note from './Note';
import Editable from './Editable';

/* import uuid from 'uuid'; */

/*
    Utilizaremos una implementación de Node.js conocida como uuid y su variante uuid.v4,
    que nos dara ids tales 1c8e7a12-0b4c-4f23-938c-00d7161f94fc que, casi con toda seguridad,
    serán únicos.

    const notes = [
    {
        /* id : '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a', 
        id: uuid.v4(),
        task: 'Learn React'
    },
    {
        /* id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f', 
        id: uuid.v4(),
        task: 'Do laundry'
    }
    ];
*/

/* 
    .map devuelve una lista de elemento li para React los renderice 

    Usamos la propiedad key para poder decirte a React que items han sido cambiados, modificados o borrados.
    Es importante que sea único ya que, sino, React no será capaz de saber el orden correcto en el que debe 
    renderizarlos. 

export default ({notes}) => (
    <ul>{notes.map(note =>
        <li key={note.id}><Note task={note.task} /></li>
    )}</ul>
)

*/

export default ({
    notes,
    onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {} 
}) => (
    <ul>{notes.map(({id, editing, task}) =>
    <li key={id}>
        <Note onClick={onNoteClick.bind(null,id)}>
            <Editable
                editing={editing}
                value={task}
                onEdit={onEdit.bind(null,id)} />
                <button onClick={onDelete.bind(null,id)}>x</button>
        </Note>
    </li>
    )}</ul>
)

