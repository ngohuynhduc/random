import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import RandomScreen from "./component/RandomScreen";

function App() {
  // console.log("Loading: ", isLoading);
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/random" element={<RandomScreen />} />
      </Routes>
    </div>
  );
}

export default App;
