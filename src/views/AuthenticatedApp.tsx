import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard/Dashboard';
import Settings from 'views/Settings/Settings';
import News from 'views/News/News';
import ScheduleView from 'views/ScheduleView/ScheduleView';
import Destinations from 'views/Destinations/Destinations';
import DestinationDetail from 'views/DestinationDetail/DestinationDetail';
import TemplateWithoutSideMenu from 'components/templates/TemplateWithoutSideMenu/TemplateWithoutSideMenu';
import Favorites from './Favorites/Favorites';
import ExpensesView from './ExpensesView/ExpensesView';
import Tickets from './Tickets/Tickets';
import Challenges from './Challenges/Challenges';

interface AuthenticatedAppProps {}

const AuthenticatedApp: React.FC<AuthenticatedAppProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Destinations />} />
          <Route path="/schedule" element={<ScheduleView />}>
            <Route path=":id" element={<ScheduleView />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/expenses" element={<ExpensesView />} />
          <Route path="/news" element={<News />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/explore/:id" element={<TemplateWithoutSideMenu />}>
          <Route index element={<DestinationDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
