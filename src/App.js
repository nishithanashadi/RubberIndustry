import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Inventory</h1>
      <button className='inventory-button'onClick={() => navigate('/product')}>Inventory</button>
      </header>
    </div>
  );
}

export default App;
