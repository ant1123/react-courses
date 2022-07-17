export class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents, startDate, passedLessons) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.startDate = startDate;
        this.passedLessons = passedLessons ? passedLessons : [];
    }
}