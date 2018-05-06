enum eventTypes {NEWS = 'news', TRANSACTION = 'transaction'};

const currencyList = {USD: 'USD', RUR: 'RUR', EUR: 'EUR'};

abstract class FeedEvent {
    date: Date;
    type: string;
    visible: boolean = true;
    id: number;

    constructor(date: (string|undefined), id: number) {
        if (date) {
            this.date = new Date(date);
        } else {
            this.date = new Date();
        }
        this.id = id;
    }
    isNews(): boolean {
        return this.type === eventTypes.NEWS;
    }

    isTransaction(): boolean {
        return this.type === eventTypes.TRANSACTION;
    }

    dateOutput(): string {
        return this.date.toLocaleString();
    }
}

class NewsEvent extends FeedEvent {
    title: string;
    description: string;
    isViewed: boolean = false;
    readonly type: string = eventTypes.NEWS;

    constructor(event, id: number) {
        super(event.date, id);
        this.title = event.title;
        this.description = event.description;
    }
}

class TransactionEvent extends FeedEvent {
    _amount: number;
    currency: string;
    sender: string;
    is_positive?: boolean;
    description?: string;
    readonly type: string = eventTypes.TRANSACTION;

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

export { eventTypes, currencyList, NewsEvent, TransactionEvent, feedEventType };
