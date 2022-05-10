import Widget from 'components/molecules/Widget/Widget';
import Schedule from 'components/molecules/Schedule/Schedule';
import DestinationsList from 'components/organisms/DestinationsList/DestinationsList';
import Expenses from 'components/molecules/Expenses/Expenses';
import Headline from 'components/atoms/Headline/Headline';
import { Wrapper } from './Dashboard.styles';
import { State } from 'interfaces/State';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { userName } = useSelector((state: State) => state.auth);
  return (
    <Wrapper>
      <Headline title={`Hello, ${userName}! 👋`} content="Welcome back and come explore the world." />
      <DestinationsList />
      <Widget isFavorites={false} />
      <Widget isFavorites />
      <Schedule />
      <Expenses />
    </Wrapper>
  );
};

export default Dashboard;
