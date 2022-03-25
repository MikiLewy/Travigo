import Widget from 'components/molecules/Widget/Widget';
import Schedule from 'components/molecules/Schedule/Schedule';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import DestinationsList from 'components/organisms/DestinationsList/DestinationsList';
import { Wrapper } from './Dashboard.styles';
const Dashboard = () => {
  return (
    <Wrapper>
      <UserInfo />
      <DestinationsList />
      <Widget isNotes={false} />
      <Widget isNotes />
      <Schedule />
    </Wrapper>
  );
};

export default Dashboard;
