import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Test 80</h1>
      <nav>
      <Link to="/">Home</Link> |{" "}
        <Link to="/large">Large</Link> |{" "}
        <Link to="/small">Small</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;