export default class {
    static trigger(name, param = null) {
        let event = new CustomEvent(name, {
            detail: param
        });

        document.dispatchEvent(event);

        return event;
    }

    static addEvent(object, event, callback, use = false) {
        if(this._eventList === undefined) {
            this._eventList = []
        }

        object.addEventListener(event, (e) => {
            callback(e);
        }, use);

        this._eventList.push(event);
    }

    static getEvents() {
        return this._eventList;
    }
}
