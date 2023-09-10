import './AddRow.scss'
import plus from './plus.svg';
import {addRowAction} from "../table/tableSlice";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";

export const AddRow = () => {

    const dispatch = useDispatch();
    const tableDataRedux = useSelector(state => state.table.tableData);

    const handleAddRow = () => {
        dispatch(addRowAction([...tableDataRedux, {
            id: uuidv4(),
            author: '',
            title: '',
            status: false,
            rating: '',
            comment: ''
        }]));
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