export const sortObjectByKey = (sortable, key) => {
    return sortable.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
};

export const uniqueId = () => {
    return `f${(+new Date).toString(16)}`;
};

export const percentage = (total, current) => {
    return parseFloat((100 * current) / total).toFixed(2);
};