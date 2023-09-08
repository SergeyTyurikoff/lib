import {v4 as uuidv4} from "uuid";

export const data = () => {
    return (
        [
            {
                id: uuidv4(),
                author: 'Герман Гессе',
                title: 'Степной волк',
                status: true,
                rating: 10,
                comment: 'Хорошо'
            },
            {
                id: uuidv4(),
                author: 'Чак Паланик',
                title: 'Снафф',
                status: true,
                rating: 9,
                comment: 'Неплохо. Очень неплохо'
            },
            {
                id: uuidv4(),
                author: 'Виктор Пелевин',
                title: 'Чапаев и Пустота',
                status: false,
                rating: '',
                comment: ''
            },
        ]
    )
}