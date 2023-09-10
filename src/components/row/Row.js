import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteRowAction, updateRowAction} from "../table/tableSlice";

import './Row.scss'
import cross from './cross.svg'

export const Row = ({data, id}) => {

    const dispatch = useDispatch();
    const tableDataRedux = useSelector(state => state.table.tableData);

    const {author, title, status, rating, comment} = data;

    const [authorRow, setAuthor] = useState(author);
    const [titleRow, setTitle] = useState(title);
    const [statusRow, setStatus] = useState(status);
    const [ratingRow, setRating] = useState(rating);
    const [commentRow, setComment] = useState(comment);

    const handleClickDelete = () => {
        dispatch(deleteRowAction(id));
    }

    const handleClickUpdate = () => {
        dispatch(updateRowAction(tableDataRedux.map(item => {
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
        })))
    }

    return (
        <tr id={id}>
            <td>
                <input type="text" onBlur={handleClickUpdate} onChange={(e) => setAuthor(e.target.value)} value={authorRow}/>
            </td>
            <td>
                <input type="text" onBlur={handleClickUpdate} onChange={(e) => setTitle(e.target.value)} value={titleRow}/>
            </td>
            <td>
                <input type="checkbox" onBlur={handleClickUpdate} onChange={(e) => setStatus(statusRow => !statusRow)} checked={statusRow}/>
            </td>
            <td>
                <input className="text-center" type="number" onBlur={handleClickUpdate} onChange={(e) => setRating(e.target.value)} value={ratingRow}/>
            </td>
            <td>
                <textarea className="scroll-design" onBlur={handleClickUpdate} onChange={(e) => setComment(e.target.value)} value={commentRow}/>
            </td>
            <td className="actions">
                <img className="cross" onClick={handleClickDelete} src={cross} alt="крестик"/>
            </td>
        </tr>
    )
}