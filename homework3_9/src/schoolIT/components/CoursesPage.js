import React from "react";

export class CoursesPage extends React.Component {

  onItemSelect = (id, name) => {
    this.props.onItemSelect(id, name);
  }
  render() {    
    return (
      <div className="coursesPageDiv">
        <div className="courseLabelDiv">Courses</div>
          {this.props.selectedSchool && this.props.selectedSchool.availableCourses.map((item) =>
            <div 
              className={this.props.selectedCourse === item.courseName ? "courseItem selected" : "courseItem"} 
              key={item.courseName}
              onClick={() => this.onItemSelect(this.props.selectedSchool.id, 
                this.props.selectedCourse === item.courseName ? null : item.courseName)}
            > 
              {item.courseName}                     
            </div>
            )
          }
      </div>
    )
  }
}