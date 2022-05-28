import React from "react";
import { TodoForm } from './components/TodoForm';
import { createNewItem } from './models/Item';
import { TodoItemDetails } from './components/TodoItemDetails';
import { updateItemFieldHistory } from './models/History';

export class Todo extends React.Component {
    state = {
        list: [],
        selectedItem: null,
    }

    componentWillMount() {
        let list = [];
        list.push(createNewItem(0,"Water Plants", "on the kitchen, living room and first floor"));
        list.push(createNewItem(1, "Pack the bags", "preparation for trip to London"));
        list.push(createNewItem(2, "Change laptop", "preparation for trip to London"));    
        list.push(createNewItem(3, "Post Homework to Hillel courses", "React group from 30.04.2022 (every Saturday)"));   
        list.push(createNewItem(4, "Make backup of HDD", "use timemachine for that"));   
        this.setState ({
            list,
            selectedItem: list[0],
        });
    }

    onItemSelect = (id) => {
        this.setState ({
            ...this.state,
            selectedItem: this.state.list[id],
        });
    }

    onItemDone = (id) => {
        const newValue = this.state.list[id];
        newValue.completed = true;
        newValue.history.push(updateItemFieldHistory ("completed", false, true));
        this.setState ({
            list: this.state.list.map(item => item.id === id ? newValue : item),
            selectedItem: newValue,
        });
        console.log("onItemDone ", this.state.list);
    }

    onItemUpdate = (id, description) => {
        const oldItem = this.state.list[id];
        const oldValue = oldItem.description;
        const newValue = {...oldItem, description };
        newValue.history.push(updateItemFieldHistory ("description", oldValue, description));
        this.setState ({
            list: this.state.list.map(item => item.id === id ? newValue : item),
            selectedItem: newValue,
        });
    }

    onItemAdd = (title) => {
        let list = this.state.list;
        // We don`t have todo`s deletion in task description
        list.push(createNewItem(this.state.list.length, title, ""));
        this.setState ({
            ...this.state,
            list,
        });
    }
    
    render() {
        return (
        <div className="TODO-App">
            <div className="Left-panel">
                <TodoForm 
                    itemList={this.state.list}
                    onItemDone={this.onItemDone}
                    onItemSelect={this.onItemSelect}
                    onItemAdd={this.onItemAdd}
                    selectedItem={this.state.selectedItem}
                />
            </div>
            <div className="Right-panel">
                <TodoItemDetails 
                    item={this.state.selectedItem}
                    onItemUpdate={this.onItemUpdate}
                />
            </div>
        </div>)       
    }
}