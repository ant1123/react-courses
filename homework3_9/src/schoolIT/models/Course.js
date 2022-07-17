import {v4 as uuid} from "uuid";

export class Course {
    constructor(courseName, totalLessons, availableTeachersAmount) {
        this.id = uuid();
        this.courseName = courseName;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }
}