import React from "react";
import { CoursesPage } from "./CoursesPage";
import { LearningGroupsPage } from "./LearningGroupsPage";
import * as utils from "../store/utils";

export class SchoolPage extends React.Component {

    render() {
        return (
            <div className="schoolPage">
                <div className="schoolInfo">
                    <div className="schooInfoItem">
                        <h1>{this.props.selectedSchool.name}</h1>
                        <span className="schoolFirstSpan">
                            Groups count: {this.props.selectedSchool.startedGroups ? this.props.selectedSchool.startedGroups.length : 0}
                        </span>
                    </div>
                    <div className="schooInfoItem">
                        <span>{this.props.selectedSchool.description}</span>
                        <span>Total amounts of students: {utils.studentsTotalSum(this.props.selectedSchool)}</span>
                    </div>
                </div>
            <div className="schoolPart">
                <div className="schoolContent">
                    <div className="coursesPage">  
                        <CoursesPage 
                            selectedSchool={this.props.selectedSchool}
                            selectedCourse={this.props.selectedCourse} 
                            onItemSelect={this.props.onCourseSelect}/>
                    </div>
                    <div className="lgroupPage">   
                        <LearningGroupsPage 
                            selectedSchool={this.props.selectedSchool}
                            selectedCourse={this.props.selectedCourse} 
                        />
                    </div> 
                </div>
            </div>
          </div>            
        )
    }
}