import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>
      <Link className="border-2" to={'/login'}>Click me</Link>
    </>
  );
}

export default App;
