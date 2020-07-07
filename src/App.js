import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  const aRef = React.createRef();

  const handleClick = function LogRef() {
    console.log(aRef);
    aRef.current.click();
  }

  return (
    <div className="App">
      <Counter aa={12} ref={aRef} />
      <br />
      <button onClick={handleClick}>aRef</button>
    </div>
  );
}

export default App;
