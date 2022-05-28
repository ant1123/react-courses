import { createNewItemHistory} from './History';

export default class Item {
    constructor(id, title, description, completed, history) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.history = history ? history : [];
    }
}

export function createNewItem (id, title, description) {
    return new Item(id, title, description, false, [createNewItemHistory(title)]);
}