import {Row} from "../row/Row";
import './Table.scss';
import {AddRow} from "../addRow/AddRow";

export const Table = ({data, deleteRow, updateRow, addRow}) => {

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
                {data.map(item => <Row key={item.id} id={item.id} deleteRow={deleteRow} updateRow={updateRow} data={item}/>)}
                <AddRow addRow={addRow}/>
            </tbody>
        </table>
    )
}