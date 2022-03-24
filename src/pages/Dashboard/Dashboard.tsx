import Schedule from 'components/molecules/Schedule/Schedule';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import DestinationsList from 'components/organisms/DestinationsList/DestinationsList';
import { Wrapper } from './Dashboard.styles';
const Dashboard = () => {
  return (
    <Wrapper>
      {/* <h1>Hello 👋</h1> */}
      <UserInfo />
      <DestinationsList />
      <Schedule />
    </Wrapper>
  );
};

export default Dashboard;
