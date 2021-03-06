import React, { useReducer, useState } from 'react';
import { data } from '../data'
import Modal from './Modal';
// reducer function
import { reducer } from './reducer'

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}
const Index = () => {
    const [name, setName] = useState('')
    // const [people, setPeople] = useState(data)
    // const [showModal, setShowModal] = useState(false)
    const [state, dispatch] = useReducer(reducer, defaultState)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if(name){
    //         setShowModal(true)
    //         setPeople([
    //             ...people,
    //             {
    //                 id: new Date().getTime().toString(),
    //                 name: name
    //             }
    //         ])
    //         setName('')
    //     } else {
    //         setShowModal(true)
    //     }
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            const newPerson = {
                id: new Date().getTime().toString(),
                name
            }
            dispatch({type: 'ADD_PEOPLE', payload: newPerson})
            setName('')
        } else {
            dispatch({type: 'NO_VALUE'})
        }
    }

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'})
    }
    return (
        <>
            {/* { showModal && <Modal/> }  */}
            { state.isModalOpen && <Modal modalContent={state.modalContent}
            closeModal={closeModal}/> }
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input type="text" value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form> 
            {
                state.people.map(person => {
                    return (
                        <div key={person.id} className="item">
                            <h4>{person.name}</h4>
                            <button 
                            onClick={() => 
                            dispatch({type: 'REMOVE_PERSON', payload: person.id})}
                            >
                                remove
                            </button>
                        </div>
                    )
                })
            } 
        </>
    );
};

export default Index;