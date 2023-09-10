import {Row} from "../row/Row";
import './Table.scss';
import {AddRow} from "../addRow/AddRow";
import {useSelector} from "react-redux";

export const Table = () => {

    const tableData = useSelector(state => state.table.tableData);
    console.log(tableData)

    return (
        <table className="table">
            <caption className="main-title">
                Прочитанные книги
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
                {tableData.map(item => <Row key={item.id} id={item.id} data={item}/>)}
                <AddRow/>
            </tbody>
        </table>
    )
}