import { EVENT_TYPES } from "../constants";

export const isArchive = (type) => {
    return type === EVENT_TYPES.ARCHIVE;
};

export const isOnline = (type) => {
    return type === EVENT_TYPES.ONLINE;
};

export const isAll = (type) => {
    return type === EVENT_TYPES.ALL;
};