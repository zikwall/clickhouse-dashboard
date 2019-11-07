
export const isEmpty = (object) => Object.entries(object) == 0 && object.constructor === Object;

export const sortable = (obj, options = {}) => {
    options = {
        ...{
            reverse: false,
            isNumericSort: true
        }, ...options
    };

    let sortable = [];

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            sortable.push([key, obj[key]]);
        }
    }

    let reversed = (options.reverse) ? -1 : 1;

    if (options.isNumericSort) {
        sortable.sort((a, b) => {
            return reversed * (a[1] - b[1]);
        });
    } else {
        sortable.sort((a, b) => {
            var x = a[1].toLowerCase(),
                y = b[1].toLowerCase();
            return x < y ? reversed * -1 : x > y ? reversed : 0;
        });
    }

    let newObj = {};

    for (let s in sortable) {
        newObj[sortable[s][0]] = sortable[s][1];
    }

    return newObj;
};

export const sort = (array, callback, useCustom = false) => {
    if (typeof callback != 'function') {
        throw new Error('Ты че ахуел?');
    }

    if (useCustom === true) {
        return callback(array);
    }

    return array.sort((a, b) => {
        return callback(a, b, array);
    })
};