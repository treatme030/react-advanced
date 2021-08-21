import React, { useEffect, useState } from 'react';

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize',checkSize)
        return () => { // cleanup function
            console.log('clean up')
            window.addEventListener('resize',checkSize) 
        }
    }, [])
    console.log('render')
    return (
        <>
            <h1>window</h1>   
            <h2>{size} PX</h2>
        </>
    );
};

export default UseEffectCleanup;