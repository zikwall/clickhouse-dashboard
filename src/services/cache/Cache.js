class Cache  {

    cacheKey = null;
    enabledLog = false;

    constructor(cacheKey = '', enabledLog = false) {
        if (cacheKey !== '') {
            this.cacheKey = cacheKey;
        }

        this.enabledLog = enabledLog;
    }

    buildKey(key) {
        key = this.cacheKey + '_' + key;

        if (this.enabledLog) {
            console.log(`Cache: build key: ${key}`);
        }

        return key;
    }

    get(key) {
        key = this.buildKey(key);

        let value = localStorage.getItem(key);

        if (value !== null) {
            if (this.enabledLog) {
                console.log(`Cache: get by key: ${key}`);
            }

            return JSON.parse(value);
        }

        if (this.enabledLog) {
            console.log(`Cache: get fail: ${key}`);
        }

        return false;
    };

    set(key, value) {
        key = this.buildKey(key);

        if (this.enabledLog) {
            console.log(`Cache: set new key: ${key}`);
        }

        localStorage.setItem(key, JSON.stringify(value));

        return this;
    }

    exist(key) {
        key = this.buildKey(key);

        if (this.enabledLog) {
            console.log(`Cache: exist: ${key}`);
        }

        return localStorage.getItem(key) !== null;
    }

    replace(key, value, callback) {

    }

    delete(key) {
        key = this.buildKey(key);

        if (this.enabledLog) {
            console.log(`Cache: delete by key: ${key}`);
        }

        localStorage.removeItem(key);

        return this;
    }
}

export default Cache;