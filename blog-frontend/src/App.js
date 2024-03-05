import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
