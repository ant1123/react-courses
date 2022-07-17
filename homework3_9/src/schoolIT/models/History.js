export default class History {
    constructor(object, action, appliedAt, message) {
        this.object = object;
        this.action = action;
        this.appliedAt = appliedAt;
        this.message = message;
    }
}

export function createSchoolHistory (title, maxGroupsCount, maxStudentsCountPerGroup) {
    return new History("school", "created", new Date(), 
        `Created school with title "${title}", max groups ${maxGroupsCount}, max students ${maxStudentsCountPerGroup}`
    );
}

export function registerNewCourseHistory (courseName, totalLessons, availableTeachersAmount) {
    return new History("course", "created", new Date(), 
        `Registered new course ${courseName}, max lessons "${totalLessons}" available teachers "${availableTeachersAmount}"`);
}

export function startGroupHistory (courseName, teacherName, amountOfStudents) {
    return new History("group", "created", new Date(), 
        `Started group new for course ${courseName} with teacher "${teacherName}" and "${amountOfStudents}" students`);
}

export function endGroupHistory (courseName, teacherName) {
    return new History("group", "updated", new Date(), 
        `Finished group ${courseName} with teacher "${teacherName}"`);
}

export function updateSchoolHistory (title, field) {
    return new History("school", "updated", new Date(), 
        `Updated school ${title}, edited field "${field}"`);
}

export function passLessonHistory (courseName, teacherName, title) {
    return new History("lesson", "updated", new Date(), 
        `Passed lesson ${title}, course ${courseName} teacher name "${teacherName}"`);
}