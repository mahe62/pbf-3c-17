import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cara 1: membuat toggle button
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON - 1841720144' : 'OFF - Muhammad Rizqi Mahendra'}
      </button>
    );
  }
}

function SambutanUser (props) {
  return <h1>Selamat Datang 1841720144 - Muhammad Rizqi Maahendra!</h1>;
}

function SambutanTamu (props) {
  return <h1>Mohon melakukan sign up terlebih dahulu.</h1>;
}

function Sambutan (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <SambutanUser />;
  }
  return <SambutanTamu />;
}

ReactDOM.render(
  // Silakan coba ganti nilai isLoggedIn={false}
  <Sambutan isLoggedIn={true} />,
  document.getElementById('root')
);