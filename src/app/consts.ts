const NEWS_EVENT_TYPE = 'news';
const TRANSACTION_EVENT_TYPE = 'transaction'; // TODO enum

abstract class FeedEvent {
    date: Date;
    type: string;
    visible: boolean = true;

    constructor(date: string) {
        this.date = new Date(date);
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

    constructor(event) {
        super(event.date);
        this.title = event.title;
        this.description = event.description;
    }
}

class TransactionEvent extends FeedEvent {
    amount: number;
    currency: string; // TODO ENUM
    sender: string;
    is_positive?: boolean;
    description?: string;
    readonly type: string = TRANSACTION_EVENT_TYPE;

    constructor(event) {
        super(event.date);
        this.amount = event.amount;
        this.currency = event.currency;
        this.sender = event.sender;
        this.is_positive = event.is_positive;
        this.description = event.description;
    }
}

type feedEventType = (NewsEvent|TransactionEvent);

function EventFactory<feedEventType>(event) {
    if (event.type === NEWS_EVENT_TYPE) {
        return new NewsEvent(event);
    } else if (event.type === TRANSACTION_EVENT_TYPE) {
        return new TransactionEvent(event);
    }
}

export { NEWS_EVENT_TYPE, TRANSACTION_EVENT_TYPE, EventFactory, feedEventType };
