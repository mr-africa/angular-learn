import { eventTypes, NewsEvent, TransactionEvent, feedEventType, currencyList } from './consts';

const RAW_FEED = [
    {
        date: '2018-05-08 15:55',
        title: 'Во ВКонтакте можно найти любого пользователя по номеру телефона',
        description: 'В социальной сети «ВКонтакте» есть интересная функция поиска, позволяющая найти человека по номеру его телефона. Соответствующий пункт вы сможете найти у себя в настройках приватности. Рекомендуем настроить его в соответствии с вашими представлениями о конфиденциальности. Пункт, расположенный в блоке «Связь со мной», получил название «Кто может найти меня при импорте контактов по номеру +7 *** *** ** **». Интересно, что соцсеть по умолчанию настроила эту опцию с минимумом конфиденциальности у всех пользователей (если не менять настройку, у вас будет установлено «Все пользователи»). Это потрясающее решение позволяет платформе подбирать вам друзей, основываясь на анализе контактов из адресной книгиИсточник: https://www.anti-malware.ru/news/2018-05-08-1447/26190',
        type: eventTypes.NEWS
    },
    {
        date: '2018-04-08 10:20',
        title: 'Киберпреступники провели дефейс камер слежения Canon в Японии',
        description: "Киберпреступникам удалось вывести из строя 60 камер слежения и безопасности от компании Canon по всей Японии. В основном пострадали морские порты, рыбный рынок в Хиросиме и медицинский центр для людей с ограниченными возможностями в Кобе. Злоумышленники провели дефейс камер, оставив сообщения «I'm Hacked. bye2» («Я взломан. Пока2»). Основная часть атаки была произведена 6 мая, согласно снимкам, полученным со взломанных устройств. Однако есть основания полагать, что подобные дефейсы происходят уже на протяжении нескольких недель. Представители Canon опубликовали официальное сообщение после первых сообщений об инцидентах со взломом. Специалисты полагают, что основной причиной массовых взломов стали пароли по умолчанию, которые владельцы камер часто не удосуживаются менять на собственные.",
        type: eventTypes.NEWS
    },
    {
        date: '2018-05-08 13:49',
        title: 'InfoWatch планирует выпустить продукт класса UEBA',
        description: 'Группа компаний InfoWatch на форуме GISEC-2018 в Дубае, ОАЭ, анонсировала выход продукта InfoWatch Prediction в классе UEBA (User and Entity Behavior Analytics). Аналитический инструмент предназначен для автоматизированного решения прикладных задач на основе прогнозирования рисков информационной безопасности, которые связаны с кадровой и финансовой политикой, выявлением инсайдерства, компрометации учетных записей, а также другими критичными с точки зрения управления персоналом процессами в организации. Базовым сценарием в первой версии продукта стало заблаговременное определение системой сотрудников, которые собираются уволиться. Коммерческий релиз решения запланирован на 2018 год.',
        type: eventTypes.NEWS
    },
    {
        date: '2018-03-04 15:08',
        title: 'В процессорах Intel найдены 8 новых уязвимостей уровня Spectre',
        description: 'Исследователи в области безопасности утверждают, что в процессорах Intel обнаружены восемь новых брешей достаточно серьезного уровня. Несколько экспертов уже сообщили о своих находках производителю. На данный момент подробности этих дыр в безопасности не раскрываются, чтобы не спровоцировать волну атак. Но уже известно, что все эти бреши представляют собой Spectre нового поколения (Spectre-NG, Spectre Next Generation). В настоящее время эксперты надеются, что никто не опубликует технические детали уязвимостей до того, как производитель выпустит патч.',
        type: eventTypes.NEWS
    },
    {
        date: '2018-02-12 12:16',
        title: 'Северокорейский антивирус SiliVaccine содержит код движка Trend Micro',
        description: 'Команда Check Point провела эксклюзивное исследование северокорейского антивирусного программного обеспечения SiliVaccine. Один из любопытных фактов состоит в том, что ключевые фрагменты кода SiliVaccine скопированы из десятилетней копии фрагментов ПО японской компании Trend Micro.',
        type: eventTypes.NEWS
    },
   {
        date: '2018-01-04 12:20',
        title: 'Знаменитая атака Rowhammer теперь угрожает устройствам Android',
        description: 'Команда исследователей VUSec предупреждает, что киберпреступники научились использовать технику Rowhammer для атак на устройства Android. Напомним, что атака RowHammer вызвана эффектом искажения содержимого отдельных битов памяти DRAM, повреждение которых может быть инициировано через цикличное чтение данных из соседних ячеек памяти (простой цикл с чтением содержимого памяти и очисткой кэша).',
        type: eventTypes.NEWS
    },
    {
        date: '2018-03-08 17:26',
        title: 'Роскомнадзор разблокировал более 3,7 млн IP-адресов Google',
        description: 'Федеральная служба по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) разблокировала шесть подсетей компании Google, включающих свыше 3,7 млн IP-адресов.',
        type: eventTypes.NEWS
    },
    {
        date: '2018-01-14 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Зарплата за январь'
    },
    {
        date: '2018-02-14 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Зарплата за февраль'
    },
    {
        date: '2018-03-14 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Зарплата за март'
    },
    {
        date: '2018-04-14 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Зарплата за апрель'
    },
    {
        date: '2018-05-14 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Зарплата за май'
    },
    {
        date: '2018-03-19 10:20',
        amount: 100000,
        currency: currencyList.RUR,
        sender: 'Работа',
        type: eventTypes.TRANSACTION,
        description: 'Премия за март'
    },
    {
        date: '2018-01-10 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Банк',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'списание за ипотеку'
    },
    {
        date: '2018-02-10 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Банк',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'списание за ипотеку'
    },
    {
        date: '2018-03-10 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Банк',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'списание за ипотеку'
    },
    {
        date: '2018-04-10 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Банк',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'списание за ипотеку'
    },
    {
        date: '2018-05-10 10:20',
        amount: 1000000,
        currency: currencyList.RUR,
        sender: 'Банк',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'списание за ипотеку'
    },
    {
        date: '2018-05-10 10:20',
        amount: 3000000,
        currency: currencyList.RUR,
        sender: 'Пятерочка',
        type: eventTypes.TRANSACTION,
        is_positive: false,
        description: 'продукты'
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
