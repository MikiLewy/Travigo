import { useState } from 'react';
import Widget from 'components/molecules/Widget/Widget';
import Schedule from 'components/molecules/Schedule/Schedule';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import DestinationsList from 'components/organisms/DestinationsList/DestinationsList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import BottomMenu from 'components/molecules/BottomMenu/BottomMenu';
import Expenses from 'components/molecules/Expenses/Expenses';
import { expensesData } from 'data/Expenses';

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
    <MainTemplate>
      <UserInfo />
      <DestinationsList />
      <Widget isNotes={false} />
      <Widget isNotes />
      <Schedule />
      <Expenses chartData={data} />
      <BottomMenu />
    </MainTemplate>
  );
};

export default Dashboard;
