import logo from './mul.png';
import './App.css';


function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720144" nama="Muhammad Rizqi Mahendra" />
      <Kartu nim="3216541321" nama="Joni Wangsit" />
      <Kartu nim="3545642111" nama="Dodi Gluduk" />
    </div>
  );
}

export default App;
