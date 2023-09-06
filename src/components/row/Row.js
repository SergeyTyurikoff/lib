export const Row = ({data}) => {

    const {author, title, status, rating, comment} = data;

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
        </tr>
    )
}