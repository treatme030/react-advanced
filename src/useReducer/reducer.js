export const reducer = (state, action) => {
    if(action.type === 'ADD_PEOPLE'){
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'person added'
        }
    }
    if(action.type === 'REMOVE_PERSON'){
        const newPeople = state.people.filter(person => person.id !== action.payload)
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'person removed'
        }
    }
    if(action.type === 'NO_VALUE'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter value'
        }
    }
    if(action.type === 'CLOSE_MODAL'){
        return {
            ...state,
            isModalOpen: false
        }
    }
    throw new Error('no matching action type')
} 
