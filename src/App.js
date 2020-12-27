
import './App.css';
import Counter from './Counter/Counter';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import SpecialButton from './Menu/SpecialButton/SpecialButton';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';
import Toggle from './Toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem route="/">Home</MenuItem>
        <MenuItem route="/about">About</MenuItem>
      </Menu>
      <hr />
      <SpecialButton />
      <input onChange={(e) => console.log(e.target.value)} />
      <hr />
      <Counter />
      <hr />
      <Toggle/>
      <hr />
      <RandomColorSquare/>
    </div>
  );
}

export default App;
