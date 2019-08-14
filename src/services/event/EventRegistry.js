import { Event } from "./index";

export default function register() {
    Event.addEvent(document, 'afterLogin', (event) => {
        console.log('after login');
    });

    //
};
