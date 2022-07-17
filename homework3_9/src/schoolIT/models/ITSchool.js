import {v4 as uuid} from "uuid";

export class ITSchool {
    constructor(name, description, shortname, maxGroupsCount, maxStudentsCountPerGroup) {
        this.id = uuid();
        this.name = name;
        this.shortname = shortname;
        this.description = description;
        this.maxGroupsCount = maxGroupsCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
        this.availableCourses = [];
        this.startedGroups = [];
    }
}