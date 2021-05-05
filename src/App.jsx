import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import GlobalStyles from "./global/globalStyles";
import theme from "./global/themes/primary";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}
