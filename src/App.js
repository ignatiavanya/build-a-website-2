import './App.css';
import img1 from './assets/img1.jpeg';

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <img src={img1} />
        <p>Hello</p>
      </header>
    </div>
  );
}

export default App;
