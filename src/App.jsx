import { createTheme } from "@mui/material";
import "./App.css";
import {
  AppBar,
  Crew,
  Destination,
  Home,
  Technology,
} from "./Components/index.js";
import ErrorPage from "./routes/ErrorPage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B0D17",
    },
    secondary: {
      main: "#D0D6F9",
    },
    common: {
      white: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Bellefair Regular",
      fontSize: "150px",
    },
    h2: {
      fontFamily: "Bellefair Regular",
      fontSize: "100px",
    },
    h3: {
      fontFamily: "Bellefair Regular",
      fontSize: "56px",
    },
    h4: {
      fontFamily: "Bellefair Regular",
      fontSize: "32px",
    },
    h5: {
      fontFamily: "Barlow Condensed Regular",
      fontSize: "28px",
      letterSpacing: "4.75px",
    },
    subtitle1: {
      fontFamily: "Bellefair Regular",
      fontSize: "28px",
    },
    subtitle2: {
      fontFamily: "Barlow Condensed Regular",
      fontSize: "14px",
      letterSpacing: "2.35px",
    },
    body1: {
      fontFamily: "Barlow Condensed Regular",
      fontSize: "16px",
      letterSpacing: "2.7px",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="crew" element={<Crew />} />
            <Route path="destination" element={<Destination />} />
            <Route path="technology" element={<Technology />} />
            <Route path="/*" element={<Navigate to="/error" />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
