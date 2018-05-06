import { NEWS_EVENT_TYPE, TRANSACTION_EVENT_TYPE, EventFactory, feedEventType } from './consts';

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
        amount: 10000,
        currency: 'RUR',
        sender: 'keko sender',
        type: TRANSACTION_EVENT_TYPE
    },
    {
        date: '2018-01-10 10:20',
        amount: 10000,
        currency: 'RUR',
        sender: 'keko sender',
        type: TRANSACTION_EVENT_TYPE,
        is_positive: false,
        description: 'kek'
    },
];

class EventList {
    private _feed: feedEventType[];
    private _sortByDate: boolean = true;
    idCounter = 1;

    constructor(raw_feed) {
        this._feed = raw_feed.map((x, index) => EventFactory(x, this.getNextIndex()));
    }

    get feed(): feedEventType[] {
        return this._feed;
    }

    getNextIndex(): number {
        return this.idCounter++;
    }

    delete(id: number): void {
        this._feed = this._feed.filter(event => event.id !== id);
    }

    sortFeedByDate(): void {
        this._feed = this._feed.sort((a: feedEventType, b: feedEventType) => {
            if (a.date > b.date && this._sortByDate) {
                return -1;
            }
            return 1;
        });
    }

    oldEventsFirst(): void {
        if (this._sortByDate) {
            this._sortByDate = false;
            this.sortFeedByDate();
        }
    }

    newEventsFirst(): void {
        if (!this._sortByDate) {
            this._sortByDate = true;
            this.sortFeedByDate();
        }
    }

    getEvent(id: number): feedEventType {
        return this.feed.find(event => event.id === id);
    }

    changeEventVisible(eventType: string, value: boolean): void {
        this._feed.forEach((event) => {
            if (event.type === eventType) {
                event.visible = value;
            }
        });
    }
}

const feed = new EventList(RAW_FEED);

export { EventList, feed };
