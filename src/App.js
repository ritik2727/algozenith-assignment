import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
// import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import Theme from "./components/Theme";
import graph from "../src/images/graph.png";
// import {  } from "@mui/styles";
// import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';
import SecondPage from "./components/SecondPage";



function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <div
          className="App"
          style={{
            background: 'linear-gradient(270deg, #05445E 0%, #022534 100%)',
            height: "100%",
            width: "100%",
          }}
        >
          <LandingPage />
        </div>
        <div
          className="App"
          style={{
            background: 'linear-gradient(180deg, #F7FAFF 0%, rgba(232, 240, 255, 0) 100%);',
            // position:" absolute",
            // width:1920,
            // height: 1195
            // backgroundImage: `url(${graph})`, 
            height: "100%",
            width: "100%",
          }}
        >
          <SecondPage />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
