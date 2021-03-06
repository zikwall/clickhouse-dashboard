export const LOCALES =  [
    {
        language: 'en',
        messages: {
            observe: 'Observe',
            uniqueUsers: 'Unique users',
            viewsOnlineArchive: 'Views online and archive',
            channelTransitions: 'Channels start',
            showAds: 'Show Ads',
            detailsDevice: 'Details by device type',
            startPeriod: 'Beginning of period',
            endPeriod: 'End of period',
            apply: 'Apply',
            choosePeriod: 'Choose period',
            channel: 'TV channel',
            dataNotYet: 'No data yet',
            dataLoading: 'Data loading',
            online: 'Online',
            archive: 'Archive',
            area: 'Area',
            smartphones: 'Smartphones',
            smartTV: 'Smart TV',
            web: 'Site',
            noData: 'No data',
            analitycs: 'Analitycs',
            traffic: 'Traffic',
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
            startPeriod: 'Начало периода',
            endPeriod: 'Конец периода',
            apply: 'Применить',
            choosePeriod: 'Выбрать период',
            channel: 'канал',
            dataNotYet: 'Данных пока нет',
            dataLoading: 'Идет загрузка данных',
            online: 'Онлайн',
            archive: 'Архив',
            area: 'Площадка',
            smartphones: 'Смартфоны',
            smartTV: 'Смарт ТВ',
            web: 'Веб-сайт',
            noData: 'Нет данных',
            analitycs: 'Аналитика',
            traffic: 'Трафик',
        }
    }
];

export const detectLang = () => {
    var language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "ru";
    language = language.substr(0, 2).toLowerCase();
    if (language != "ru") {
        language = "en";
    }
    return language;
}