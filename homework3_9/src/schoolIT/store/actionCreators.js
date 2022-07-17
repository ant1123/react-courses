import { ACTION_TYPES } from "./actionTypes";
import { Course, ITSchool, LearningGroup } from '../models';

export function selectSchoolActionCreator(id) {
  return {type: ACTION_TYPES.SELECT_SCHOOL, payload: id};
}

export function selectCourseActionCreator(id, courseName) {
  return {type: ACTION_TYPES.SELECT_COURSE, payload: { id, courseName}};
}

export function registerCourseActionCreator(id, courseName, totalLessons, availableTeachersAmount) {
  return {type: ACTION_TYPES.REGISTER_COURSE, payload: {id, value: new Course(courseName, totalLessons, availableTeachersAmount)}};
}

export function startLearningGroupActionCreator(id, courseName, teacherName, amountOfStudents, startDate) {
  return {type: ACTION_TYPES.START_LEARNING_GROUP, payload: {id, courseName, group: new LearningGroup(courseName, teacherName, amountOfStudents, startDate)}};
}

export function passLessonActionCreator(id, courseName, teacherName, title, topics) {
  return {type: ACTION_TYPES.PASS_LESSON, payload: {id, courseName, teacherName, title, topics}};
}

export function createSchoolActionCreator(name, description, shortname, maxGroupsCount, maxStudentsCountPerGroup) {
  return {type: ACTION_TYPES.CREATE_IT_SCHOOL, payload: new ITSchool(name, description, shortname, maxGroupsCount, maxStudentsCountPerGroup)};
}

export function updateSchoolActionCreator(id, field, value, name) {
  return {type: ACTION_TYPES.UPDATE_IT_SCHOOL, payload: {id, field, value, name}};
}

export function endLearningGroupActionCreator(id, courseName, teacherName) {
  return {type: ACTION_TYPES.END_LEARNING_GROUP, payload: {id, courseName, teacherName}};
}