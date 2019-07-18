import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

//JSX
const App = (
    <div className={style.app}>TEST APP</div>
)

ReactDOM.render(App, document.querySelector('#app'));