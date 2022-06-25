import {questions} from './Questions';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game questions={questions}/>
    </div>
  );
}

export default App;
