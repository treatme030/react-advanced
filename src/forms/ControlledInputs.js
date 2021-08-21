import React, { useState } from 'react';
//value, onChange 

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName && email){
            const person = { 
                id : new Date().getTime().toString(), // id 만들기
                firstName : firstName, 
                email : email 
            }
            //추가
            setPeople([
                ...people,
                person
            ])
            //초기화
            setFirstName('')
            setEmail('')
        } else {
            console.log('empty values')
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id="firstName" name="firstName"
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id="email" name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">add person</button>
                </form>
                {
                    people.map((person) => {
                        const { id, firstName, email } = person
                        return (
                            <div className="item" key={id}>
                                <h4>{firstName}</h4>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </article>    
        </>
    );
};

export default ControlledInputs;