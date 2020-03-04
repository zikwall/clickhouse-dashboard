export const LOCALES =  [
    {
        language: 'en',
        messages: {
            observe: 'Observe',
            uniqueUsers: 'Unique users',
            viewsOnlineArchive: 'Views online and archive',
            channelTransitions: 'Channel transitions',
            showAds: 'Show Ads',
            detailsDevice: 'Details by device type',
            startPeriod: 'Beginning of period',
            endPeriod: 'End of period',
            apply: 'Apply',
            choosePeriod: 'Choose period',
            channel: 'TV channel',
            dataNotYet: 'No data yet',
            dataLoading: 'Data loading',
        }
    },
    {
        language: 'ru',
        messages: {
            observe: 'Обзор',
            uniqueUsers: 'Уникальные пользователи',
            viewsOnlineArchive: 'Просмотры онлайн/архив',
            channelTransitions: 'Переходы по каналам онлайн',
            showAds: 'Показ рекламы на каналах',
            detailsDevice: 'Детализация по типам устройств',
            start_period: 'Начало периода',
            endPeriod: 'Конец периода',
            apply: 'Применить',
            choosePeriod: 'Выбрать период',
            channel: 'канал',
            dataNotYet: 'Данных пока нет',
            dataLoading: 'Идет загрузка данных',
        }
    }
];

export const detectLang = () => {
    var language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "ru";
    language = language.substr(0, 2).toLowerCase();
    return language;
}