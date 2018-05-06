import { eventTypes, NewsEvent, TransactionEvent, feedEventType, currencyList } from './consts';

const RAW_FEED = [
    {
        date: '2018-01-13 10:20',
        title: 'kek news 1',
        description: 'ololol',
        type: eventTypes.NEWS
    },
    {
        date: '2018-01-14 10:20',
        title: 'kek news 2',
        description: 'ololol',
        type: eventTypes.NEWS
    },
    {
        date: '2018-01-14 10:20',
        amount: 10000,
        currency: currencyList.RUR,
        sender: 'keko sender',
        type: eventTypes.TRANSACTION
    },
    {
        date: '2018-01-10 10:20',
        amount: 10000,
        currency: currencyList.USD,
        sender: 'keko sender',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'kek'
    },
];

function EventFactory<feedEventType>(event, id: number) {
    if (event.type === eventTypes.NEWS) {
        return new NewsEvent(event, id);
    } else if (event.type === eventTypes.TRANSACTION) {
        return new TransactionEvent(event, id);
    }
}

class EventList {
    private _feed: feedEventType[];
    private _sortByDate: boolean = true;
    private idCounter = 1;

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

    addEvent(event, eventType:eventTypes): void {
        let newEvent;
        if (eventType === eventTypes.NEWS) {
            newEvent = new NewsEvent(event, this.getNextIndex());
        } else if (eventType === eventTypes.TRANSACTION) {
            newEvent = new TransactionEvent(event, this.getNextIndex());
        }
        this._feed.splice(0, 0, newEvent);
    }
}

const feed = new EventList(RAW_FEED);

export { EventList, feed };
