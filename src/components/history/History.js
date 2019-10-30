
export default class History {
    static returnedUrl = null;

    static remember = (url) => {
        History.returnedUrl = url;
        window.localStorage.setItem('returnedUrl', History.returnedUrl);
    };

    static forget = () => {
        window.localStorage.removeItem('returnedUrl')
    };

    static getReturnedUrl = () => {
        if (History.returnedUrl) {
            return  History.returnedUrl;
        }

        History.returnedUrl = window.localStorage.getItem('returnedUrl');

        return History.returnedUrl;
    };

    static hasReturned = () => {
        return History.getReturnedUrl() !== '' && History.getReturnedUrl() !== null;
    };

    static rememberAndRedirect = (url, redirectTo) => {
        History.remember(url);
        window.location.replace(redirectTo);
    };

    static redirectToRemember = () => {
        if (History.hasReturned()) {
            window.location.replace(History.getReturnedUrl());
            History.forget();
        }
    };
}