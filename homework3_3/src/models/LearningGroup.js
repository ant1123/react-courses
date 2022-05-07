import { Lesson } from './Lesson';

export class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }

    doneLesson(title, topics) {
        let found = this.passedLessons.find(element => 
            element != null && element.title != null 
            && element.title.localeCompare && element.title.localeCompare(title) === 0);
            if (!found) {
                let lesson = new Lesson(title, topics);
                this.passedLessons.push(lesson);
            }
    }
}