import { NEWS_EVENT_TYPE, TRANSACTION_EVENT_TYPE, EventFactory } from './consts';

const RAW_FEED = [
    {
        date: '2018-01-13 10:20',
        title: 'kek news 1',
        description: 'ololol',
        type: NEWS_EVENT_TYPE
    },
    {
        date: '2018-01-14 10:20',
        title: 'kek news 2',
        description: 'ololol',
        type: NEWS_EVENT_TYPE
    },
    {
        date: '2018-01-14 10:20',
        amount: 100,
        currency: 'RUR',
        sender: 'keko sender',
        type: TRANSACTION_EVENT_TYPE
    },
    {
        date: '2018-01-10 10:20',
        amount: 100,
        currency: 'RUR',
        sender: 'keko sender',
        type: TRANSACTION_EVENT_TYPE,
        is_positive: false,
        description: 'kek'
    },
];

let feed = RAW_FEED.map(x => EventFactory(x));

export default feed;
