import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;