import React from "react";

export class Dashboard extends React.Component {

  onItemSelect = (id) => {
    this.props.onItemSelect && this.props.onItemSelect(id);
  }

  render() {
    return (
      <div className="dashboardDiv">
        {this.props.schools && this.props.schools.map((item) =>
          <div 
            className={this.props.selectedSchool && this.props.selectedSchool.id === item.id ? "schoolShortItem selected" : "schoolShortItem"} 
            key={item.id}
            onClick={() => this.onItemSelect(item.id)}
          > 
            {item.shortname}                     
          </div>
          )
        }
      </div>
    )
  }
}