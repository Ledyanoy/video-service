import first from "./images/tele/first.png";
import doubletwo from "./images/tele/doubletwo.png";
import rbk from "./images/tele/rbc.png";
import amedia from "./images/tele/amedia.png";


const teleData = {
    channels: [
        {
            title: "Первый канал",
            image: first,
            schedule: [
                {time: '13:00', name: 'Новости (с субтитрами)'},
                {time: '14:00', name: 'Давай поженимся'},
                {time: '15:00', name: 'Другие новости'},
            ]
        },
        {
            title: "2x2",
            image: doubletwo,
            schedule: [
                {time: '13:00', name: 'МУЛЬТ ТВ. Сезон 4, 7 серия'},
                {time: '14:00', name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'},
                {time: '15:00', name: 'БУРДАШЕВ. Сезон 1, 20 серия'},
            ]
        },
        {
            title: "РБК",
            image: rbk,
            schedule: [
                {time: '13:00', name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'},
                {time: '14:00', name: 'ДЕНЬ. Главные темы'},
                {time: '15:00', name: 'Главные новости'},

            ]
        },
        {
            title: "AMEDIA PREMIUM",
            image: amedia,
            schedule: [
                {time: '13:00', name: 'Клиент всегда мёртв'},
                {time: '14:00', name: 'Голодные игры: Сойка-пересмешница. Часть I'},
                {time: '15:00', name: 'Секс в большом городе'},

            ]
        },
        {
            title: "REN TV",
            image: null,
            schedule: [
                {time: '13:00', name: 'Заходят как-то 3 инопланетянина в бар'},
                {time: '14:00', name: 'А бармен им и говорит'},
                {time: '15:00', name: 'Совпадение? Не думаю!'},

            ]
        },
        {
            title: "Россия",
            image: null,
            schedule: [
                {time: '13:00', name: 'Сольный концерт Максима Галкина'},
                {time: '14:00', name: 'Концерт пародий на Максима Галкина'},
                {time: '15:00', name: '3 инопланетянина уходят из зала'},

            ]
        },
    ],

}

export default teleData;