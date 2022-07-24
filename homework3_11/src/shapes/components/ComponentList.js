import React from "react";

export class ComponentList extends React.Component {
    
    onItemSelect = (id) => {
        this.props.onSelectElement && this.props.onSelectElement(id);
    }
    onItemDelete = (id) => {
        this.props.onDeleteElement && this.props.onDeleteElement(id);
    }

    render() {
        return (
            <div className="shapeItemContainer">
                <div className="listTitle">List</div>
                {this.props.list.map((item) =>
                    <div className="shapeItemList" key={item.id}>
                        <div 
                            className={this.props.selectedItem === item.id ? "shapeItem selected" : "shapeItem"} 
                            onClick={() => this.onItemSelect(item.id)}
                        > 
                            {item.name}                     
                        </div>
                        <button 
                            className="deleteButton"
                            onClick={() => this.onItemDelete(item.id)}
                        >x</button>
                    </div>
                    )
                }
            </div>
        )       
    }
};