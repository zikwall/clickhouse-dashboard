
export const isEmpty = (object) => Object.entries(object) == 0 && object.constructor === Object;

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