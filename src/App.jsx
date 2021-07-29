import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home/Home";
import { GlobalStyles } from "./styles/globalStyles";
import { light } from "./styles/theme/light";

function App() {


  return (
    <>
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
    </>
  );
}

export default App;
