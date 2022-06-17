import React from "react";
export class TodoItem extends React.Component {
    onItemSelect = () => {
        this.props.onItemSelect && this.props.onItemSelect(this.props.item.id);
    }
    onItemDone = () => {
        this.props.onItemDone && this.props.onItemDone(this.props.item.id);
    }

    addButtonSpan = () => {
        return this.props.item.completed ? (<span>✔️</span>) : null;
    }

    addButton = () => {
        return (<button onClick={this.onItemDone} 
            className={this.props.item.completed ? "Todo-Button Todo-Button-Active" : "Todo-Button"}>
                {this.addButtonSpan()}
        </button>);
    }

    render() {
        return (
            <div className={this.props.selected ? "Todo-Item Todo-Item-Selected" : "Todo-Item"} onClick={this.onItemSelect}>
                {this.addButton()}
                <div className="Todo-Item-Info">
                    <div className={this.props.item.completed ? "Todo-Item-Title Todo-Items-Done" : "Todo-Item-Title"}>
                        {this.props.item.title}
                    </div>
                    <div className="Todo-Item-Description">{this.props.item.description}</div>
                </div>
            </div>
        )
    }
}