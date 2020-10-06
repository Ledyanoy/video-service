
import cat from "./images/films/cat.png";
import bat from "./images/films/bat.png";
import once from "./images/films/once.png";
import strip from "./images/films/strip.png";

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
            desc: "Бэтмен, Бэтмен! сером фоне Бэтмен"
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
            title: "Комедии",
            image: "",
            color: "yellow"
        }
    ]
}

export default filmsData;