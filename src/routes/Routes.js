import { Dashboard } from "../pages/dashboard";
import { AutonomousSystems } from "../pages/autonomous-systems";
import Ads from "../pages/ads";
import Users from "../pages/users";
import Channels from "../pages/channels";
import StartApp from "../pages/start-app";
import RegistrationRequests from "../pages/registration-requests";
import UserChannels from "../pages/user-channels";
import UserViews from "../pages/user-views";
import ChannelsByGadget from "../pages/channels-by-gadget";
import ChannelsStartOnlineArchive from "../pages/channels-start-online-archive";
import Clickhouse from "../pages/clickhouse/Clickhouse";
import ChannelsAds from "../pages/channels-ads";

import { EOLocale, Translator } from "eo-locale";
import { LOCALES, detectLang } from "./../constants";



const tr = new Translator(detectLang(), LOCALES);

// потом поменяю
const NavigationRoutes = [
    {
        url: '/dashboard/main',
        title: 'Dashboard',
        icon: '',
        isVisible: 'canViewDashboard',
        childs: [
            {
                title: 'Analytics',
                url: '/analytics',
                sort: 1,
                component: Dashboard
            },
            {
                title: 'Statistic',
                url: '/statistic',
                sort: 2,
                component: null,
            },
            {
                title: 'Ads',
                url: '/ads_',
                sort: 3,
                component: null,
            }
        ],
        sort: 1,
    },
    {
        title: 'Autonomous Systems',
        url: '/dashboard/autonomous-systems',
        icon: 'view_module',
        isVisible: 'canViewDashboard',
        childs: [
            {
                title: 'Generral Information',
                url: '/general',
                sort: 1,
                component: AutonomousSystems
            },
            {
                title: 'Subscriber traffic',
                url: '/traffic',
                sort: 2,
                component: null,
            },
            {
                title: 'Link structures',
                url: '/chain-structure',
                sort: 3,
                component: null,
            }
        ],
        sort: 2
    },
    {
        title: 'Monit',
        url: '/dashboard/monit',
        icon: '',
        sort: 3,
        isVisible: 'canViewDashboard',
        childs: [
            {
                title: 'Рекламные площадки',
                url: '/ads',
                sort: 1,
                component: Ads
            },
            {
                title: 'Пользователи',
                url: '/user-statistics',
                sort: 2,
                component: Users
            },
            {
                title: 'Статистика по каналам',
                url: '/channels',
                sort: 3,
                component: Channels
            },
            {
                title: 'Запуски приложений',
                url: '/start-app',
                sort: 4,
                component: StartApp
            }
        ],
    },
    {
        title: 'Technical information',
        url: '/tech-information',
        icon: 'error',
        sort: 4,
        component: null
    },
    {
        title: 'ClickHouse Dashboard',
        url: '/dashboard/clickhouse',
        icon: 'extension',
        sort: 5,
        isVisible: 'canViewDashboard',
        component: Clickhouse
    },
    {
        title: 'Пользователи',
        url: '/dashboard/users/registration-requests',
        icon: 'extension',
        sort: 6,
        isVisible: 'canViewDashboard',
        component: RegistrationRequests
    },
    {
        title: 'Private',
        url: '/dashboard/private',
        icon: 'extension',
        sort: 7,
        childs: [
            {
                title: tr.messages.uniqueUsers,
                url: '/user-channels',
                sort: 1,
                component: UserChannels
            },
            {
                title: tr.messages.viewsOnlineArchive,
                url: '/user-views',
                sort: 2,
                component: UserViews
            },
            {
                title: tr.messages.channelTransitions,
                url: '/channels-start-online-archive',
                sort: 3,
                component: ChannelsStartOnlineArchive
            },
            {
                title: tr.messages.showAds,
                url: '/channels-ads',
                sort: 4,
                component: ChannelsAds
            },
            {
                title: tr.messages.detailsDevice,
                url: '/channels-by-gadget',
                sort: 5,
                component: ChannelsByGadget
            },
        ]
    }
];

export default NavigationRoutes;
