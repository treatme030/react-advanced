import React, { useState } from 'react';

const UseStateBasics = () => {
    // console.log(useState('hello world'))
    // const value = useState(1)[0]
    // const handler = useState(1)[1]
    const [text, setText] = useState('random title')

    const handleClick = () => {
        if(text === 'random title'){
            setText('JUHEE')
        } else {
            setText('random title')
        }
    }
    return (
        <>
           <h1>{text}</h1>
           <button type="button" className="btn"
           onClick={handleClick}
           >change title</button>
        </>
    );
};

export default UseStateBasics;