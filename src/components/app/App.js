import React, {useState} from 'react';
/*import logo from './logo.svg';
import { Counter } from './features/counter/Counter';*/
import './App.scss';
import {Table} from "../table/Table";
// import {AddForm} from "../addForm/AddForm";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [tableData, setTableData] = useState([
        {
            id: uuidv4(),
            author: 'Герман Гессе',
            title: 'Степной волк',
            status: true,
            rating: 10,
            comment: 'Хорошо'
        },
        {
            id: uuidv4(),
            author: 'Чак Паланик',
            title: 'Снафф',
            status: true,
            rating: 9,
            comment: 'Неплохо. Очень неплохо'
        },
        {
            id: uuidv4(),
            author: 'Виктор Пелевин',
            title: 'Чапаев и Пустота',
            status: false,
            rating: '',
            comment: ''
        },
    ]);


    const addRow = () => {
        setTableData([...tableData, {
            id: uuidv4(),
            author: '',
            title: '',
            status: false,
            rating: '',
            comment: ''
        }])
    }

    const updateRow = ({id, authorRow, titleRow, statusRow, ratingRow, commentRow}) => {
        setTableData(tableData.map(item => {
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
        }))
    }

    const deleteRow = (id) => {
        setTableData(tableData.filter(item => item.id !== id))
    }

    return (
        <>
            <div className="board">
                <div className="table-wrap">
                    <Table data={tableData} deleteRow={deleteRow} addRow={addRow} updateRow={updateRow}/>
                </div>
                {/*<AddForm addRow={addRow}/>*/}
            </div>
        </>
    );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}*/

export default App;
