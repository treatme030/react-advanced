import React, { useContext, useState } from 'react';
import { data } from '../data'

const PersonContext = React.createContext()
// two components - Provider, Consumer

const ContextApi = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter(person => person.id !== id)
        })
    }
    return (
        <PersonContext.Provider value={{ people, removePerson }}>
            <h3>Context API / useContext</h3>
            <List/>
        </PersonContext.Provider>
    );
};

const List = () => {
    const { people } = useContext(PersonContext)
    return (
        <>
            {
                people.map(person => {
                    return <SinglePerson key={person.id} {...person}/>
                })
            }
        </>
    );
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
}

export default ContextApi;