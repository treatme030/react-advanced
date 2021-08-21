import React, { useState } from 'react';

const ShortCircuit = () => {
    const [text, setText] = useState('') // false
    const [isError, setIsError] = useState(false)
    // const firstValue = text || 'hello world' // text가 거짓일 때
    // const secondValue = text && 'hello world' // text가 참일 때 
    return (
        <>
            {/* <h1>{firstValue}</h1>
            <h1>value: {secondValue}</h1> */}
            <h1>{text || 'juhee'}</h1>
            <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
            { isError && <h1>Error...</h1> }
            { isError ? <p>there is an error...</p> : <div><h2>there is no error...</h2></div>}
        </>
    );
};

export default ShortCircuit;