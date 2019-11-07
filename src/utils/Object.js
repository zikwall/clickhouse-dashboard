
export const isEmpty = (object) => Object.entries(object) == 0 && object.constructor === Object;

export const sortable = (obj, reverse) => {
    let sortable = [];

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            sortable.push([key, obj[key]]);
        }
    }

    let reversed = (reverse) ? -1 : 1;

    sortable.sort((a, b) => {
        return reversed * (a[1] - b[1]);
    });

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