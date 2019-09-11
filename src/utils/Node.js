export const reflow = (node) => {
    void node.offsetHeight;
};

export const getNodeHeight = (node) => {
    return node.scrollHeight;
};