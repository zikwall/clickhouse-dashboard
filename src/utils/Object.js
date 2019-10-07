export const isEmpty = (object) => {
    return Object.entries(object) === 0 && object.constructor === Object;
};
