enum eventTypes {NEWS = 'news', TRANSACTION = 'transaction'};

const currencyList = {USD: 'USD', RUR: 'RUR', EUR: 'EUR'};
const languageCode = 'ru-RU';

const dateFormat = new Intl.DateTimeFormat(languageCode, {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric'});

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
        return dateFormat.format(this.date);
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
    sender: string;
    is_positive?: boolean = true;
    description?: string;
    readonly type: string = eventTypes.TRANSACTION;
    amountFormat: any;

    constructor(event, id: number) {
        super(event.date, id);
        this._amount = event.amount;
        this.sender = event.sender;
        if (event.is_positive !== undefined) {
            this.is_positive = event.is_positive;
        }
        this.description = event.description;
        this.amountFormat = new Intl.NumberFormat(languageCode, {
            style: 'currency',
            currency: event.currency,
            currencyDisplay: 'symbol'
        });
    }

    get amount(): string { // Храним значения в копейках/центах/итп чтоб не возникло возможных проблем с float числами
        const amount = (this._amount / 100).toFixed(2);
        return this.amountFormat.format(amount);
    }

    positiveSymbol() {
        if (this.is_positive) {
            return '+';
        }
        return '-';
    }

    senderLabel() {
        if (this.is_positive) {
            return 'Отправитель';
        }
        return 'Получатель';
    }
}

type feedEventType = (NewsEvent|TransactionEvent);

export { eventTypes, currencyList, NewsEvent, TransactionEvent, feedEventType };
