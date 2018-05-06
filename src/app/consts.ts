const NEWS_EVENT_TYPE = 'news';
const TRANSACTION_EVENT_TYPE = 'transaction'; // TODO enum

abstract class FeedEvent {
    date: Date;
    type: string;
    visible: boolean = true;
    id: number;

    constructor(date: string, id: number) {
        this.date = new Date(date);
        this.id = id;
    }
    isNews(): boolean {
        return this.type === NEWS_EVENT_TYPE;
    }

    isTransaction(): boolean {
        return this.type === TRANSACTION_EVENT_TYPE;
    }

    dateOutput(): string {
        return this.date.toLocaleString();
    }
}

class NewsEvent extends FeedEvent {
    title: string;
    description: string;
    isViewed: boolean = false;
    readonly type: string = NEWS_EVENT_TYPE;

    constructor(event, id: number) {
        super(event.date, id);
        this.title = event.title;
        this.description = event.description;
    }
}

class TransactionEvent extends FeedEvent {
    _amount: number;
    currency: string; // TODO ENUM
    sender: string;
    is_positive?: boolean;
    description?: string;
    readonly type: string = TRANSACTION_EVENT_TYPE;

    constructor(event, id: number) {
        super(event.date, id);
        this._amount = event.amount;
        this.currency = event.currency;
        this.sender = event.sender;
        this.is_positive = event.is_positive;
        this.description = event.description;
    }

    get amount(): string { // Храним значения в копейках/центах/итп чтоб не возникло возможных проблем с float числами
        return (this._amount / 100).toFixed(2);
    }
}

type feedEventType = (NewsEvent|TransactionEvent);

function EventFactory<feedEventType>(event, id: number) {
    if (event.type === NEWS_EVENT_TYPE) {
        return new NewsEvent(event, id);
    } else if (event.type === TRANSACTION_EVENT_TYPE) {
        return new TransactionEvent(event, id);
    }
}

export { NEWS_EVENT_TYPE, TRANSACTION_EVENT_TYPE, EventFactory, feedEventType };
