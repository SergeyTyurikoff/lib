import {Row} from "../row/Row";
import './Table.scss';
import {AddRow} from "../addRow/AddRow";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export const Table = () => {

    const [tableData, setTableData] = useState([
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
    ]);


    const addRow = () => {
        setTableData([...tableData, {
            id: uuidv4(),
            author: '',
            title: '',
            status: false,
            rating: '',
            comment: ''
        }])
    }

    const updateRow = ({id, authorRow, titleRow, statusRow, ratingRow, commentRow}) => {
        setTableData(tableData.map(item => {
            if (item.id === id) {
                return {
                    id,
                    author: authorRow,
                    title: titleRow,
                    status: statusRow,
                    rating: ratingRow,
                    comment: commentRow,
                }
            } else {
                return item;
            }
        }))
    }

    const deleteRow = (id) => {
        setTableData(tableData.filter(item => item.id !== id))
    }

    return (
        <table className="table">
            <caption className="main-title">
                Книги
            </caption>
            <thead>
                <tr>
                    <th>
                        Автор
                    </th>
                    <th>
                        Название
                    </th>
                    <th>
                        Прочитано
                    </th>
                    <th>
                        Рейтинг <br/> (из 10)
                    </th>
                    <th>
                        Отзыв
                    </th>
                    <th>
                        Действия
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(item => <Row key={item.id} id={item.id} deleteRow={deleteRow} updateRow={updateRow} data={item}/>)}
                <AddRow addRow={addRow}/>
            </tbody>
        </table>
    )
}