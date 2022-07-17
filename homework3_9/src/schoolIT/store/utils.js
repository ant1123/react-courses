import { Lesson } from '../models';
import { LearningGroup } from '../models';

export const checkEquals = (item1, item2) => item1 !== null && item1.localeCompare && item1.localeCompare(item2) === 0;

export const startLearningGroup = (school, courseName, learningGroup) => {
    let found = school.availableCourses.find(element => checkEquals(element.courseName, courseName));
    if (found && found.availableTeachersAmount > 0) {
        return {
            ...school,
            availableCourses: school.availableCourses.map(element => 
                checkEquals(element.courseName, courseName) ? {...element, availableTeachersAmount: element.availableTeachersAmount--} : element),
            startedGroups: [...school.startedGroups, learningGroup]
        };
    } else return school;
}  

export const endLearningGroup = (school, courseName, teacherName) => {
    let foundCourse = school.availableCourses.find(element => element != null && checkEquals(element.courseName, courseName));
    const startedGroups = school.startedGroups.filter(element => element != null &&
        !(checkEquals(element.teacherName, teacherName) && checkEquals(element.courseName, courseName)));
        if (foundCourse) {
        return {
            ...school, 
            availableCourses: school.availableCourses.map(element => 
                checkEquals(element.courseName, courseName) ? {...element, availableTeachersAmount: element.availableTeachersAmount++} : element),
            startedGroups,
        };
    } else return school;
} 

export const doneLesson = (school, courseName, teacherName, title, topics) => {   
    const checkEqualGroup = (group, courseName, teacherName) => group && group.courseName === courseName && group.teacherName === teacherName;     
    return { ...school, startedGroups: school.startedGroups.map(group => {
        if (!checkEqualGroup(group, courseName, teacherName)) return group;
        else {
                let found = group && group.passedLessons.find(element => 
                    element != null && element.title != null && checkEquals(element.title, title));
                if (!found) {
                    let lesson = new Lesson(title, topics);
                    return new LearningGroup(
                        group.courseName, 
                        group.teacherName, 
                        group.amountOfStudents, 
                        group.startDate, 
                        [...group.passedLessons, lesson]
                    );
                }
                else return group;                
            }
        })
    };
}

export const studentsTotalSum = (school) => {
    var sum = 0;
    for (var i = 0; i < school.startedGroups.length; i++) {
      sum += school.startedGroups[i].amountOfStudents;
    }
    return sum;
}
