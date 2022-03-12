import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <img
        className="background-image"
        src={process.env.PUBLIC_URL + "/images/vinyl-record.jpg"}
        alt="background"
      />
    </div>
  );
}

export default App;
