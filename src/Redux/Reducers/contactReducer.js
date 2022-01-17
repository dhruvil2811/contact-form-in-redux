const initialState =[
    {
        id:0,
        name : "dhruvil",
        number : 1234567890,
        email : "d@gmail.com",
    },
    {
        id:1,
        name : "darshan",
        number : 9087654321,
        email : "darshan@gmail.com",
    },
]

const contactReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "ADD_CONTACT" :
            state = [...state,action.payload]
            return state;
        case "EDIT_CONTACT" : 
            const updatestate = state.map((contact)=>
                contact.id === action.payload.id ? action.payload : contact
            );
            state = updatestate;
            return state;
        case "DELETE_CONTACT" : 
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default:
            return state
    }
}

export default contactReducer;