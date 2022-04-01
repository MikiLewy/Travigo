import { useState } from 'react';
import Widget from 'components/molecules/Widget/Widget';
import Schedule from 'components/molecules/Schedule/Schedule';
import DestinationsList from 'components/organisms/DestinationsList/DestinationsList';
import Expenses from 'components/molecules/Expenses/Expenses';
import { expensesData } from 'data/Expenses';
import Headline from 'components/atoms/Headline/Headline';
import Calendar from 'components/molecules/Calendar/Calendar';

const Dashboard = () => {
  const [data, setData] = useState({
    labels: expensesData.map((expense) => expense.date),
    datasets: [
      {
        label: 'Your Expenses',
        data: expensesData.map((expense) => expense.expenses),
        backgroundColor: ['#07253F'],
        borderColor: '#07253F',
      },
    ],
  });
  return (
    <>
      <Headline title="Hello, Jeremy! 👋" content="Welcome back and explore the world." />
      <DestinationsList />
      <Widget isNotes={false} />
      <Widget isNotes />
      <Schedule />
      <Expenses chartData={data} />
    </>
  );
};

export default Dashboard;
