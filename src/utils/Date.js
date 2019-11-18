const TomorrowTimestamp = (forJsTime = false) => {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

    if (forJsTime) {
        return tomorrow.getTime();
    }

    return toTimestamp(tomorrow.getTime());
};

// с этого момента началась собираться статистика по нагрузке каналов
const BeginOfLoadChannelTimestamp = (forJsTime = false) => {
    let time = (new Date('Nov 07, 2019')).getTime();

    if (forJsTime) {
        return time;
    }

    return toTimestamp(time);
};

const CurrentDayTimestamp = (forJsTime = false) => {
    if (forJsTime) {
        return (new Date()).getTime();
    }

    return toTimestamp((new Date()).getTime());
};

const toTimestamp = (jsTime) => {
    return jsTime / 1000;
};

const toJsTimestamp = (time) => {
    return time * 1000;
};

const RangeOfDate = (date) => {
    let start = new Date(date);
    start.setHours(0,0,0,0);

    let end = new Date(date);
    end.setHours(23,59,59,999);

    return {
        begin: start,
        end: end
    }
};

export {
    TomorrowTimestamp,
    BeginOfLoadChannelTimestamp,
    CurrentDayTimestamp,
    toTimestamp,
    toJsTimestamp,
    RangeOfDate
}