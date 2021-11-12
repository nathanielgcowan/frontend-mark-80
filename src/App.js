import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Test 80</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/food">Home</Link> |{" "}
        <Link to="/large">Home</Link> |{" "}
        <Link to="/small">Home</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;