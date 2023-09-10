import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {addRowAction} from "../table/tableSlice";

import styles from './AddRow.module.scss';
import plus from './plus.svg';

export const AddRow = () => {

    const dispatch = useDispatch();
    const tableData = useSelector(state => state.table.tableData);

    const handleAddRow = () => {
        dispatch(addRowAction([...tableData, {
            id: uuidv4(),
            author: '',
            title: '',
            status: false,
            rating: '',
            comment: ''
        }]));
    }

    return (
        <tr className={styles.addRow}>
            <td colSpan={5}></td>
            <td>
                <img className={styles.plus} onClick={handleAddRow} src={plus} alt="знак плюса"/>
            </td>
        </tr>
    )
}