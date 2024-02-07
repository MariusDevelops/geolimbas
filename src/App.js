import "./App.css";
import Routes from "./routes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Home />
      </Routes>
    </div>
  );
}

export default App;
