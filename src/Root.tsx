import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard/Dashboard';
import Profile from 'views/Profile/Profile';
import News from 'views/News/News';
import ScheduleView from 'views/ScheduleView/ScheduleView';
import Destinations from 'views/Destinations/Destinations';
import DestinationDetail from 'views/DestinationDetail/DestinationDetail';
import TemplateWithoutSideMenu from 'components/templates/TemplateWithoutSideMenu/TemplateWithoutSideMenu';
const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Destinations />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/schedule" element={<ScheduleView />}>
              <Route path=":id" element={<ScheduleView />} />
            </Route>
          </Route>
          <Route path="/explore/:id" element={<TemplateWithoutSideMenu />}>
            <Route index element={<DestinationDetail />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
