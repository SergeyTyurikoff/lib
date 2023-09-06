import {Row} from "../row/Row";
import './Table.scss';

export const Table = ({data}) => {

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
                        Статус
                    </th>
                    <th>
                        Рейтинг <br/> (из 10)
                    </th>
                    <th>
                        Отзыв
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => <Row id={i} data={item}/>)}
            </tbody>
        </table>
    )
}