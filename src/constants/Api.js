
export const API_DOMAIN = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://clh.limehd.tv'
    : 'http://clh.limehd.tv';