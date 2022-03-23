import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Dashboard from 'pages/Dashboard/Dashboard';
const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Dashboard />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
