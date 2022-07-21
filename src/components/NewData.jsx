import React from 'react';
import './NewData.css'

function NewData(props) {
    const date = props.date.toLocaleDateString()
    return (
        <div className="data-list">
            <div className='nw-container'>
                <div className='nw-date'>{date}</div>
                <div className='nw-title'>{props.title}</div>
            </div>
        </div>
    );
}

export default NewData;