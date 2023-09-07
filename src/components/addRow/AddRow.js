import './AddRow.scss'

export const AddRow = () => {
    return (
        <tr className="add-row">
            <td colSpan={5}></td>
            <td>
                <div className="plus">
                    <span>+</span>
                </div>
            </td>
        </tr>
    )
}