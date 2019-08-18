
export const API_DOMAIN = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://account.limehd.local'
    : 'http://clh.limehd.tv';