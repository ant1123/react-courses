import { Course } from './Course';
import { LearningGroup } from './LearningGroup';

let checkEquals = (item1, item2) => item1 !== null && item1.localeCompare && item1.localeCompare(item2) === 0;

export class ITSchool {
    constructor(schoolName, description, maxGroups, maxStudents) {
        this.schoolName = schoolName;
        this.description = description;
        this.maxGroups = maxGroups;
        this.maxStudents = maxStudents;
        this.availableCourses = [];
        this.startedGroups = [];
    }
   
    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        let found = this.availableCourses.find(element => element != null && checkEquals(element.courseName, courseName));
        if (!found) {
            let course = new Course(courseName, totalLessons, availableTeachersAmount);
            this.availableCourses.push(course);
        }
    }

    startLearningGroup(courseName, teacherName, amountOfStudents) {
        let found = this.availableCourses.find(element => element != null && checkEquals(element.courseName, courseName));
        if (found && found.availableTeachersAmount > 0) {
            let learningGroup = new LearningGroup(courseName, teacherName, amountOfStudents);
            this.startedGroups.push(learningGroup);
            found.availableTeachersAmount--;
        }
    }  
    
    endLearningGroup(courseName, teacherName) {
        let foundCourse = this.availableCourses.find(element => element != null && checkEquals(element.courseName, courseName));
        let groupsAmount = this.startedGroups.length;
        this.startedGroups = this.startedGroups.filter(element => element != null &&
            !(checkEquals(element.teacherName, teacherName) && checkEquals(element.courseName, courseName)));
        if (foundCourse && groupsAmount !== this.startedGroups.length) {
            foundCourse.availableTeachersAmount++;
        }
    } 

    getLearningGroupByCourseName(courseName) {
        return this.startedGroups.filter(element => element != null 
            && checkEquals(element.courseName, courseName));
    } 
}