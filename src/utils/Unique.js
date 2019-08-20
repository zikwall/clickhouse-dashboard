export const uniqueId = () => {
    return `f${(+new Date).toString(16)}`;
};