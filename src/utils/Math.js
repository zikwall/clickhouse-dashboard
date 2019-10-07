export const sortObjectByKey = (sortable, key) => {
    return sortable.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
};

export const uniqueId = () => {
    return `f${(+new Date).toString(16)}`;
};

export const percentage = (total, current) => {
    return parseFloat((100 * current) / total).toFixed(2);
};

// тридцати секундки переводим в часы
export const seconds30toMars = (duration, fixed = 2) => {
    let hours = duration/120;

    if (isNaN(hours)) {
        return 0;
    }

    return hours.toFixed(fixed);
};