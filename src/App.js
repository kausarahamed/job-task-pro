import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navber from "./Navber/Navber";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navber></Navber>}></Route>
      </Routes>
    </div>
  );
}

export default App;
