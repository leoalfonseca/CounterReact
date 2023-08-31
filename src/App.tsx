import React, {useState} from 'react';

type CounterState = {
  count: number;
}

const App: React.FC = () => {
const [state, setState] = useState<CounterState>({count: 0});

const decrement = () => {
  if(state.count === 0){
      return;  
    }
  setState({count: state.count - 1});
}

const increment = () => {
  setState({count: state.count + 1});
}

  return <div className="App">
     <h2>Counter : {state.count}</h2>
      <div className="wrapper">
        <button className='botao' onClick={decrement}>-1</button>
        <button className='botao' onClick={increment}>+1</button>
      </div>
    </div>
}

export default App;
