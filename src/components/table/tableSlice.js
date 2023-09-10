import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    tableData: [
        {
            id: uuidv4(),
            author: 'Герман Гессе',
            title: 'Степной волк',
            status: true,
            rating: 10,
            comment: 'Неплохо'
        },
        {
            id: uuidv4(),
            author: 'Чак Паланик',
            title: 'Снафф',
            status: true,
            rating: 9,
            comment: 'Чудовищно великолепно! Автор неугомонен в своём слоге и в раскрытии перипетий'
        },
        {
            id: uuidv4(),
            author: 'Виктор Пелевин',
            title: 'Чапаев и Пустота',
            status: false,
            rating: '',
            comment: ''
        },
    ],
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addRowAction: (state, action) => {
            state.tableData = action.payload
        },
        deleteRowAction: (state, action) => {
          state.tableData = state.tableData.filter(item => item.id !== action.payload)
        },
        updateRowAction: (state, action) => {
            state.tableData = action.payload
        },
    }
});

const {actions, reducer} = tableSlice;

export default reducer;
export const {
    addRowAction,
    deleteRowAction,
    updateRowAction,
} = actions;