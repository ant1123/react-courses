import React from "react";
import { TodoItem } from '../TodoItem';
export class TodoList extends React.Component {

    render() {
        return (<div>
            {this.props.itemList.map((todoItem) =>
                <TodoItem 
                    key={todoItem.id} 
                    item={todoItem}
                    selected={this.props.selectedItem && this.props.selectedItem.id === todoItem.id}
                    onItemDone={this.props.onItemDone}
                    onItemSelect={this.props.onItemSelect}
                />
                )
            }
        </div>)       
    }
};
