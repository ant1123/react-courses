import { useReducer, useMemo, useEffect } from 'react';
import {Search, ContactList, EditPopup } from '../index';

const initialState = {
    list: [],
    editableContactId: 0,
    showPopup: false,
    searchValue: '',
};

function reducer(state, action) {
    switch (action.type) {
      case 'init':
        return {...state, list: action.list};
      case 'edit':
        return {...state, showPopup: true, editableContactId: action.id};
      case 'delete':
        return {...state, list: state.list.filter(contact => contact.id !== action.id)}; 
      case 'save':
        return  {
            ...state, 
            showPopup: false, 
            list: state.list.map(contact => contact.id === action.changedContact.id ? action.changedContact : contact)
        }; 
      case 'search':
        return {...state, searchValue: action.searchValue};
      case 'close':
        return {...state, showPopup: false};
      default:
        return state;
    }
}

export function ContactBook () {    
    useEffect(() => 
      dispatch({type: 'init', list: [{id: 1, name: "Andres", surname: "Garsia", number: "+38 (012) 345 67 89"},
          {id: 2, name: "Anna", surname: "Delvey", number: "+38 (012) 345 67 89"},
          {id: 3, name: "Anna", surname: "Sorokin", number: "+38 (067) 145 67 76"},
          {id: 4, name: "Bob", surname: "Garrison", number: "+38 (095) 245 67 23"},
          {id: 5, name: "Jane", surname: "Doe", number: "+40 (258) 222 67 89"},
          {id: 6, name: "John", surname: "Doe", number: "+40 (258) 123 67 89"},
          {id: 7, name: "Robert", surname: "Person", number: "+40 (247) 215 67 89"}]
      }), []);
    const [state, dispatch] = useReducer(reducer, initialState);
    const filterList = (contact, filter) =>  
        contact.name.includes(filter) ||
        contact.surname.includes(filter) ||
        contact.number.includes(filter) ||
        `${contact.name} ${contact.surname}`.includes(filter);
    const filteredList = useMemo(() => state.list.filter((contact) => filterList(contact, state.searchValue)), [state.list, state.searchValue]);
    return (
        <div className='contactBookContainer'>
            <Search 
                placeholder={"Search"} 
                onSearchChange={(searchValue) => dispatch({type: 'search', searchValue})}
            />
            <ContactList 
                contacts={filteredList}
                onContactEdit={(id) => dispatch({type: 'edit', id})}
                onContactDelete={(id) => dispatch({type: 'delete', id})}
            />
            {state.showPopup ? 
                <EditPopup 
                    editableContact={state.list.find(contact => contact.id === state.editableContactId)} 
                    onEditComplete={(changedContact) => dispatch({type: 'save', changedContact})}
                    onEditClose={() => dispatch({type: 'close'})}
                /> 
                : <></>
            }
        </div>
    );
}