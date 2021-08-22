import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../data'

const Person = () => {
    const [name, setName] = useState('default name')
    const { id } = useParams()

    useEffect(() => {
        const newPerson = data.find(person => person.id === parseInt(id))
        setName(newPerson.name)
    })
    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
                Back To People
            </Link>
        </div>
    );
};

export default Person;