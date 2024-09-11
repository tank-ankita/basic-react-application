import './css/app.css';
import Scene from './components/Scene';
import BlockPad from './components/BlockPad';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ width: '50vw', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <BlockPad />
      </div>
      <Scene />
    </div>
  );
}

export default App;
