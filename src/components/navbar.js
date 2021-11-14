import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/food">Food List</Link> |{" "}
                <Link to="/large">Large</Link> |{" "}
                <Link to="/small">Small</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
            </nav>
        </div>
    );
}