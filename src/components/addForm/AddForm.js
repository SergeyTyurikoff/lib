import {useState} from "react";
import './AddForm.scss';

export const AddForm = ({addRow}) => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(false);
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addRow(author, title, status, rating, comment)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Автор"/>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Название"/>
            <label>
                <input type="checkbox" onChange={(e) => setStatus(status => !status)}/>
                Прочитано ли?
            </label>
            <input type="number" onChange={(e) => setRating(e.target.value)} value={rating} placeholder="Рейтинг"/>
            <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Отзыв"/>
            <button type="submit">Добавить</button>
        </form>
    )
}