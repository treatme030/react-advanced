import React, { useEffect, useRef } from 'react';

// preserves value
// does not trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)

    }

    useEffect(() => {
        console.log(refContainer.current)
        refContainer.current.focus()//다시 랜더링 되더라도 포커스 유지
    })
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello</div>   
        </>
    );
};

export default UseRefBasics;