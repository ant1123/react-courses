export default class History {
    constructor(field, action, prevValue, currentValue, appliedAt, message) {
        this.field = field;
        this.action = action;
        this.prevValue = prevValue;
        this.currentValue = currentValue;
        this.appliedAt = appliedAt;
        this.message = message;
    }
}
export function createNewItemHistory (title) {
    return new History("title", "create", null, title, new Date(), `Created task with title "${title}"`);
}

export function updateItemFieldHistory (field, oldValue, newValue) {
    return new History(field, "update", oldValue, newValue, new Date(), `Changed task ${field} from "${oldValue}" to "${newValue}"`);
}