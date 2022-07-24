import { useReducer } from 'react';
import {Viewer, ComponentList, InputForm} from './components';
import {v4 as uuid} from "uuid";
import {initialState} from './components/utils/initialInputValues';

function reducer(state, action) {
    switch (action.type) {
      case 'edit':
        return {...state, selectedItem: action.id};
      case 'delete':
        return {...state, list: state.list.filter(item => item.id !== action.id)}; 
      case 'save':
        const find = state.list.find(item => item.id === action.changedItem.id);
        return {
            ...state, 
            selectedItem: action.changedItem.id,
            list: find ? state.list.map(item => item.id === action.changedItem.id ? action.changedItem : item) :
            [...state.list, action.changedItem]
        }; 
      default:
        return state;
    }
}

export function Shapes () {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='shapesMain'>
            <InputForm
                list={state.list}
                selectedItem={state.selectedItem} 
                onEditComplete={(changedItem) => dispatch({type: 'save', changedItem})}
            /> 
            <Viewer 
                item={state.list.find(item => item.id === state.selectedItem)} 
                onItemAdd={() => dispatch({type: 'edit', id: uuid()})}
            />
            <ComponentList 
                list={state.list}
                selectedItem={state.selectedItem}
                onDeleteElement={(id) => dispatch({type: 'delete', id})}
                onSelectElement={(id) => dispatch({type: 'edit', id})}
            />
        </div>
    );
}