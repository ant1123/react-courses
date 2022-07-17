import { connect } from "react-redux";
import { Dashboard } from "./components/Dashboard";
import { SchoolPage } from "./components/SchoolPage";
import { Course } from './models';
import {
  selectSchoolActionCreator, 
  selectCourseActionCreator, 
  registerCourseActionCreator,
  updateSchoolActionCreator,
  startLearningGroupActionCreator,
  passLessonActionCreator} from './store';
import { useEffect } from 'react';

function SchoolIT({selectedSchool, schools, selectedCourse, dispatch}) {
  
  const initSchoolsInfo = () => {
          
    return (dispatch, getState) => {
      const state = getState();
      const firstCourse = new Course("React course", 30, 2);
      const availableCourses = [
        firstCourse,
        new Course("Angular course", 30, 3),
        new Course("Vue course", 30, 1)];
      // Testing that reducer works correctly
      dispatch(updateSchoolActionCreator(state.schools[0].id, "availableCourses", availableCourses, state.schools[0].name));
      dispatch(registerCourseActionCreator(state.schools[1].id, "Responsive design", 21, 2));
      dispatch(registerCourseActionCreator(state.schools[2].id, "Computer Literacy", 21, 2));

      dispatch(startLearningGroupActionCreator(state.schools[0].id, "React course", "Petro", 14, "2022/04/20"));
      dispatch(startLearningGroupActionCreator(state.schools[0].id, "React course", "Senya", 13, "2022/04/30"));
      dispatch(startLearningGroupActionCreator(state.schools[0].id, "Angular course", "Vasya", 11, "2022/05/10")); 
      dispatch(startLearningGroupActionCreator(state.schools[0].id, "Responsive design", "Oleg", 14, "2022/06/20"));
      dispatch(startLearningGroupActionCreator(state.schools[0].id, "Computer Literacy", "Gosha", 13, "2022/07/30"));  

      dispatch(passLessonActionCreator(state.schools[0].id, "React course", "Petro", "Components Interacting", "make React components interact"));
      dispatch(passLessonActionCreator(state.schools[0].id, "React course", "Petro", "Lifecycle Methods", "specific moments in a component’s life"));
      dispatch(passLessonActionCreator(state.schools[0].id, "React course", "Petro", "Hooks", "use Hooks in React"));
      dispatch(selectSchoolActionCreator(state.schools[0].id));  
      dispatch(selectCourseActionCreator(state.schools[0].id, firstCourse.courseName));  
    }
  }
  //eslint-disable-next-line
  useEffect(() => {dispatch(initSchoolsInfo())}, [dispatch]);
  return (
    <div className="school">
      <div className="dashboard">
        <Dashboard 
          schools={schools}
          selectedSchool={selectedSchool}
          onItemSelect={(id) => dispatch(selectSchoolActionCreator(id))}
        />
      </div>
      <div className="schoolDiv"> 
         {selectedSchool && (
            <SchoolPage 
              schools={schools} 
              selectedSchool={selectedSchool}
              selectedCourse={selectedCourse} 
              onCourseSelect={(id, courseName) => dispatch(selectCourseActionCreator(id, courseName))}
            />
            )
          }
      </div>
    </div>
  );
}

const mapStateToProps = (state, dispatch) => ({
  selectedSchool: state.selectedSchool, 
  schools: state.schools, 
  selectedCourse: state.selectedCourse,
  dispatch});
export const SchoolITComponent = connect(mapStateToProps)(SchoolIT);
