import "./App.css";
import { Crew, Destination, Home, Technology } from "./Components/index.js";
import ErrorPage from "./routes/ErrorPage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crew" element={<Crew />} />
          <Route path="destination" element={<Destination />} />
          <Route path="technology" element={<Technology />} />
          <Route path="/*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
