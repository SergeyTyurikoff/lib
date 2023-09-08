import './AddRow.scss'
import plus from './plus.svg';

export const AddRow = ({addRow}) => {

    const handleAddRow = (e) => {
        addRow()
    }

    return (
        <tr className="add-row">
            <td colSpan={5}></td>
            <td>
                <img className="plus" onClick={handleAddRow} src={plus} alt="знак плюса"/>
            </td>
        </tr>
    )
}