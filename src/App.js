import logo from './logo.svg';
import './App.css';
import XylButton from './components/XylButton/XylButton';

function App() {
  return (
    <div className="App">
      <XylButton text="Hello" height={700} color="orange" number={1} sound={require('./assets/bvng.mp3')}/>
      <XylButton text="World" height={680} color="green" number={2} sound={require('./assets/crfo.mp3')}/>
      <XylButton text="Hello" height={660} color="orange" number={1} sound={require('./assets/dtse.mp3')}/>
      <XylButton text="World" height={640} color="green" number={2} sound={require('./assets/edqt.mp3')}/>
      <XylButton text="Hello2" height={620} color="#123afg" number={3} sound={require('./assets/ldcc.mp3')}/>
      <XylButton text="World2" height={600} color="blue" number={4} sound={require('./assets/peoi.mp3')}/>
      <XylButton text="World2" height={580} color="orange" number={4} sound={require('./assets/tena.mp3')}/>
      <XylButton text="World2" height={560} color="blue" number={4} sound={require('./assets/udgb.mp3')}/>
    </div>
  );
}

export default App;
