import React from "react";

export class Viewer extends React.Component {

    onItemAdd = () => {
        this.props.onItemAdd && this.props.onItemAdd();
    }

    renderItem = () => {
        const arr = ["position", "rotation", "scale"];
        const replacer = function (key, value) {
            if (arr.includes(key)) {
              const coord = value.split(",");
              return `{x=${coord[0]}, y=${coord[1]}, z=${coord[2]}}`;
            } else {
              return value;
            }
          };
        return (
            JSON
                .stringify(this.props.item, replacer, "/t")
                .replace(/"([^"]+)":/g, '$1:')
                .replace(/.$/, "/t}")
                .split("/t")
                .map((item) =>(
                    <div key={item} className={item.startsWith("{") || item === "}" ? "viewerItemTag" : "viewerItem"}>
                        {item}
                    </div>)
                    )
                );
    }

    render() {
        return (
            <div className="viewerContainer">
                <div className="shapesDescription">
                    {this.props.item && (<div className="shape">
                        {this.renderItem()}
                    </div>)}
                </div>
                <div className="addButton">
                    <button onClick={this.onItemAdd}>+</button>
                </div>
            </div>
        )
    }
}