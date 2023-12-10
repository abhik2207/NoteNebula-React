import React from 'react'
import { MdDelete } from "react-icons/md";

const Note = (props) => {
    const { id, text, date, deleteNote } = props;

    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDelete className='delete-icon' onClick={()=>deleteNote(id)} />
            </div>
        </div>
    )
}

export default Note;
