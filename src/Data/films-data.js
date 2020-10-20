import cat from "./images/films/cat.png";
import bat from "./images/films/bat.png";
import once from "./images/films/once.png";
import strip from "./images/films/strip.png";
import smile from "./images/films/smile.png";
import cry from "./images/films/cry.png";
import alien from "./images/films/alien.png";
import scary from "./images/films/scary.png";

const filmsData = {
    newItems: [
        {
            id: 1,
            title: "Мульт в кино. Выпуск №103. Некогда грустить!",
            image: cat,
            desc: "Кошка, кошка! На зеленом фоне кошка"
        },
        {
            id: 2,
            title: "Новый Бэтмен",
            image: bat,
            desc: "Бэтмен, Бэтмен! На сером фоне Бэтмен"
        },
        {
            id: 3,
            title: "Однажды... в Голливуде",
            image: once,
            desc: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
        },
        {
            id: 4,
            title: "Стриптизёрши",
            image: strip,
            desc: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
        },
    ],
    genres: [
        {
            id: 1,
            title: "Комедии",
            image: smile,
            color: "yellow"
        },
        {
            id: 2,
            title: "Драмы",
            image: cry,
            color: "pink"
        },
        {
            id: 3,
            title: "Фантастика",
            image: alien,
            color: "blue"
        },
        {
            id: 4,
            title: "Ужасы",
            image: scary,
            color: "grey"
        }
    ]
}

export default filmsData;