import { ACTION_TYPES } from "./actionTypes";
import * as utils from "./utils";
import * as History  from "../models/History";

const refreshState = (prevState, freshData) => ({...prevState, ...freshData});

export const reducer = (prevState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.CREATE_IT_SCHOOL: {
      return refreshState(prevState, {
        schools: [...prevState.schools, payload],
        history: [...prevState.history, History.createSchoolHistory(payload.title, payload.maxGroupsCount, payload.maxStudentsCountPerGroup)]
      });
    }
    case ACTION_TYPES.UPDATE_IT_SCHOOL: {
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id ? {
          ...school, [payload.field]: payload.value
        } : school),
        history: [...prevState.history, History.updateSchoolHistory(payload.name, payload.field)],
      });
    }
    case ACTION_TYPES.SELECT_SCHOOL: {
      return refreshState(prevState, {selectedSchool: prevState.schools.find(({id}) => id === payload)});
    }
    case ACTION_TYPES.SELECT_COURSE: {
      const school = prevState.schools.find(({id}) => id === payload.id);
      const found = school && school.availableCourses.find(element => utils.checkEquals(element.courseName, payload.courseName));
      return refreshState(prevState, {selectedCourse: found && found.courseName});
    }
    case ACTION_TYPES.PASS_LESSON: {
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id ? 
        utils.doneLesson(school, payload.courseName, payload.teacherName, payload.title, payload.topics) : school),
        history: [...prevState.history, History.passLessonHistory (payload.courseName, payload.teacherName, payload.title)],
      });
    }
    case ACTION_TYPES.REGISTER_COURSE: {    
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id ? {
          ...school, availableCourses: [...school.availableCourses, payload.value]
        } : school),
        history: [...prevState.history, History.registerNewCourseHistory (payload.value.courseName, payload.value.totalLessons, payload.value.availableTeachersAmount)],
      });
    }
    case ACTION_TYPES.START_LEARNING_GROUP: {    
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id ? 
        utils.startLearningGroup(school, payload.courseName, payload.group) : school),
        history: [...prevState.history, History.startGroupHistory(payload.courseName, payload.group.teacherName, payload.group.amountOfStudents)],
      });
    }
    case ACTION_TYPES.END_LEARNING_GROUP: {    
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id ? 
        utils.endLearningGroup(school, payload.courseName, payload.teacherName) : school),
        history: [...prevState.history, History.endGroupHistory (payload.courseName, payload.teacherName)],
      });
    }
    default: {
      return prevState;
    }
  }
};