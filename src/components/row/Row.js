import './Row.scss'
import {useState} from "react";
import cross from './cross.svg'

export const Row = ({data, deleteRow, updateRow, id}) => {

    const {author, title, status, rating, comment} = data;

    const [authorRow, setAuthor] = useState(author);
    const [titleRow, setTitle] = useState(title);
    const [statusRow, setStatus] = useState(status);
    const [ratingRow, setRating] = useState(rating);
    const [commentRow, setComment] = useState(comment);

    const handleClickDelete = () => {
        deleteRow(id)
    }

    const handleClickUpdate = () => {
        updateRow({id, authorRow, titleRow, statusRow, ratingRow, commentRow})
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
                <input type="checkbox" onBlur={handleClickUpdate} checked={statusRow} onChange={(e) => setStatus(statusRow => !statusRow)}/>
            </td>
            <td>
                <input type="number" onBlur={handleClickUpdate} onChange={(e) => setRating(e.target.value)} value={ratingRow}/>
            </td>
            <td>
                <input type="text" onBlur={handleClickUpdate} onChange={(e) => setComment(e.target.value)} value={commentRow}/>
            </td>
            <td className="actions">
                <img className="cross" onClick={handleClickDelete} src={cross} alt="крестик"/>
            </td>
        </tr>
    )
}