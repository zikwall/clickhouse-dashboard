export const getRGBColor = (fixedCount = 0) => {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';

    if (fixedCount > 0) {
        const colors = [];

        for (let j = 0; j < fixedCount; j++) {
            for (let i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            colors.push(color);
            color = '#';
        }

        return colors;
    }

    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};