import React, {useState} from 'react';
/*import logo from './logo.svg';
import { Counter } from './features/counter/Counter';*/
import './App.scss';
import {Table} from "../table/Table";
import {AddForm} from "../addForm/AddForm";

function App() {

    const [tableData, setTableData] = useState([
        {
            author: 'Герман Гессе',
            title: 'Степной волк',
            status: true,
            rating: 10,
            comment: 'Хорошо'
        },
        {
            author: 'Чак Паланик',
            title: 'Снафф',
            status: false,
            rating: 9,
            comment: 'Неплохо. Очень неплохо'
        },
    ]);


    const addRow = (author, title, status, rating, comment) => {
        setTableData([...tableData, {author, title, status, rating, comment}])
    }

    return (
        <>
            <Table data={tableData}/>
            <AddForm addRow={addRow}/>
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
