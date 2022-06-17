import React from "react";
export class TodoItemDetails extends React.Component {

    state = {
        description: "",
    }

     componentDidMount() {
        this.setState ({description : this.props.item.description});
      }

    componentDidUpdate(prevProps) {
        if (this.props.item.description !== prevProps.item.description) {
            this.setState ({description : this.props.item.description});
        }
      }

    onItemUpdate = (event) => {
        this.setState ({description : event.target.value});
    }

    onItemBlur = (event) => {
        this.props.onItemUpdate && this.props.onItemUpdate(this.props.item.id, this.state.description);
    }

    renderHistory = (history) => {
        return (
            <div key={history.appliedAt.toISOString()} className="History-Message">
               <div>{history ? history.message : ""}</div>
               <div>{history && history.appliedAt ? `${history.appliedAt.toLocaleDateString()} ${history.appliedAt.toLocaleTimeString()}`: ""}</div>
            </div>
        );
    }

    renderItem = () => (
        <div className="Todo-Item-Details">
            <div className="Todo-Item-Description-Label">
                {this.props.item ? this.props.item.title : ""}
            </div>
            <textarea id="addItem" name="addItem" rows="3" cols="30" className="Todo-Item-Change-Details" 
                onChange={this.onItemUpdate} 
                onBlur={this.onItemBlur}
                value={this.state.description}
            />
            <div className="History-Div">
                <div className="History-Label">History</div>
                {this.props.item.history.map((history) => this.renderHistory(history))}
            </div>
        </div>
    );

    renderNothing = () => (
        <div className="Nothing-Label">
           Nothing selected
        </div>
    );

    render = () => {
        return (
            <div>
                {this.props.item ? this.renderItem() : this.renderNothing()}
            </div>
        );
    }
}