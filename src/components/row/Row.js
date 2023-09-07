import './Row.scss'

export const Row = ({data, deleteRow, id}) => {

    const {author, title, status, rating, comment} = data;

    const handleClick = () => {
        deleteRow(id)
    }

    return (
        <tr className={status ? 'done' : null}>
            <td>
                {author}
            </td>
            <td>
                {title}
            </td>
            <td>
                {status ? '+' : '-'}
            </td>
            <td>
                {rating}
            </td>
            <td>
                {comment}
            </td>
            <td className="actions">
                <span className="cross" onClick={handleClick}>
                    x
                </span>
                <span className="edit">
                    edit
                </span>
            </td>
        </tr>
    )
}