import React, { useState } from 'react';
import NewData from './NewData';
import './GeneralForm.css'

function GeneralForm(props) {
    const [title, setTitle] = useState('')
    
    const getTitle = (e) => {
        setTitle(e.target.value)
        console.log(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newData = {
            id: Math.random(),
            title: title,
            date: new Date(),
        }
        props.addNewData(newData)

        setTitle('')    
    }

    return (
        <form onSubmit={submitHandler} className="general-form">
            <div className="addData">
                <input onChange={getTitle} type="text" value={title} />
                <button>Button</button>
            </div>
            {props.data.map((element) => {
                return (
                    <NewData 
                    key={element.id}
                    title={element.title}
                    date={element.date}/>
                )
            })}
        </form>
    );
}

export default GeneralForm;