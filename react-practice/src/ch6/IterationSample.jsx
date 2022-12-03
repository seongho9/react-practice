import React, { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'snowman' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'snow' },
        { id: 4, text: 'wind' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const handleInputText = (e) => {
        setInputText(e.target.value);
    }
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }
    const handleClick = () => {
        setNames([
            ...names,
            { id: nextId, text: inputText }
        ]);
        setNextId(prev => {
            return prev.nextId + 1;
        });
        setInputText('');
    }
    const onRemove = (id) => {
        const removed = names.filter(name => name.id != id);
        setNames(removed);
    }
    const namesList = names.map(name =>
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    return (
        <React.Fragment>
            <input
                value={inputText}
                onChange={handleInputText}
                onKeyPress={onEnter}
            />
            <button onClick={handleClick}>추가</button>
            <ul>{namesList}</ul>
        </React.Fragment>
    );
}
export default IterationSample;