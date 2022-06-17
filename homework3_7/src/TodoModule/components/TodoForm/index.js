import React from "react";
import { TodoList } from '../TodoList';
export class TodoForm extends React.Component {
    state = {
        newTitle: "",
    }
    onItemAdd = () => {
        this.props.onItemAdd && this.props.onItemAdd(this.state.newTitle);  
    }

    onChange = (event) => {
        event && event.target && this.setState ({newTitle : event.target.value});
    }

    render() {
        return (
        <div className="TODO-form">
            <div className="TODO-label-container">
                <h1 className="TODO-label">Todos</h1>
            </div>
            <div className="TODO-list">
                <TodoList 
                        itemList={this.props.itemList}
                        onItemDone={this.props.onItemDone}
                        onItemSelect={this.props.onItemSelect}
                        selectedItem={this.props.selectedItem}
                />
            </div>
            <div className="Add-Todo">
                <textarea id="addItem" name="addItem" rows="3" cols="30" className="Add-field" 
                        value={this.state.newTitle}
                        onChange={this.onChange}
                    />
                <button onClick={this.onItemAdd} className="Add-button">+</button> 
            </div>      
        </div>)       
    }
}