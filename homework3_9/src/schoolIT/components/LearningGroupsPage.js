import React from "react";

export class LearningGroupsPage extends React.Component {

  renderLessonElement = (className, i) => {
    return (<div className={className} key={"item" + i}></div>);
  }

  renderLessonsRow = (passed, totals) => {
    var rows = [];
    for (let i = 0; i < totals; i++) {
      let className = i < passed ? "lesson passed" : "lesson";
      rows.push(this.renderLessonElement(className, i));
    }
    return rows;
  }

  render() {
    const selectedCourse = this.props.selectedSchool.availableCourses.find(course => course.courseName === this.props.selectedCourse);   
    const groupLabel = 
      !this.props.selectedSchool ? `No learning groups`:
      !this.props.selectedCourse ? `Learning groups for ${this.props.selectedSchool.name}` :
      this.props.selectedSchool.startedGroups && this.props.selectedSchool.startedGroups.length > 0 ?
      `Learning groups for ${selectedCourse.courseName}` : `No learning groups`;
    return (
      <div className="coursesDiv">
        <div className="groupsLabel">{groupLabel}</div>
          {this.props.selectedSchool && this.props.selectedSchool.startedGroups
            .filter(item => !this.props.selectedCourse || this.props.selectedCourse === item.courseName)
            .map((item, index) =>
            { 
              const course = this.props.selectedSchool.availableCourses.find(course => course.courseName === item.courseName);  
              return (
                    <div className="groupItem" key={`${item.courseName}-${item.teacherName}`}>
                      <div className='learningGroupLabel'>Learning group {index+1}</div> 
                        <div className="groupInfoRow">
                          <div>
                            <div className='groupInfoText'>{item.teacherName}</div>
                            <div className='groupInfoLabel'>teacher</div>
                          </div> 
                          <div>
                            <div className='groupInfoText'>
                              {item.passedLessons.length} / {course && course.totalLessons}
                          </div>
                              <div className='groupInfoLabel'>passed lesson</div>
                          </div> 
                          <div>
                              <div className='groupInfoText'>
                                {item.amountOfStudents} / {this.props.selectedSchool.maxStudentsCountPerGroup}
                          </div>
                            <div className='groupInfoLabel'>students</div>
                          </div>
                          <div>
                            <div className='groupInfoText'>{item.startDate}</div>
                            <div className='groupInfoLabel'>group started</div>
                        </div>
                      </div> 
                      <div className="lessonsContainer">
                        <div className="lessonsRow">
                          {this.renderLessonsRow(item.passedLessons.length, course ? course.totalLessons : 0)}
                        </div> 
                    </div>               
                  </div>
                )
              }
            )
          }
      </div>
    )
  }
}