import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function NumberList(props) {
  const nim = props.nim;
  const listItems = nim.map((number, index) =>
    <li key={index.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const nim = [1, 8, 4, 1, 7, 2, 0, 1, 4, 4]; // <-- Ubah sesuai NIM Anda
ReactDOM.render(
  <NumberList nim={nim} />,
  document.getElementById('root')
);