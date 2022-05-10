import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from 'helpers/baseUrl';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';
import { Expenses } from 'interfaces/Expenses';
import { LineChart } from 'interfaces/Charts';
import { useDispatch } from 'react-redux';
import { error } from 'features/modal/modalSlice';

export const useExpenses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [totalMoney, setTotalMoney] = useState<number>();
  const { id } = useParams();
  const { token } = useSelector((state: State) => state.auth);
  const [expensesError, setExpensesError] = useState('');
  const [lineChartData, setLineChartData] = useState<LineChart | any>({
    labels: expenses.map((expense: Expenses) => expense.date),
    datasets: [
      {
        label: 'Your Expenses',
        data: expenses.map((expense: Expenses) => expense.expenses),
        backgroundColor: ['#07253F'],
        borderColor: '#07253F',
      },
    ],
  });

  useEffect(() => {
    setLineChartData({
      labels: expenses.map((expense: Expenses) => expense.date),
      datasets: [
        {
          label: 'Your Expenses',
          data: expenses.map((expense: Expenses) => expense.expenses),
          backgroundColor: ['#07253F'],
          borderColor: '#07253F',
        },
      ],
    });
  }, [expenses]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseURL}/expenses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setExpenses(result.data.expenses);
        setTotalMoney(result.data.totalMoney);
      } catch (err: any) {
        setExpensesError(err.response.data.message);
      }
    })();
  }, []);

  const depositMoneyHandler = async (formData: any) => {
    try {
      const result = await axios(`${baseURL}/add-money`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          amount: formData.amount,
        },
      });
      setTotalMoney(result.data.totalMoney);
    } catch (err: any) {
      setExpensesError(err.response.data.message);
    }
  };

  const buyTicketHandler = async () => {
    try {
      await axios(`${baseURL}/expenses/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/tickets');
    } catch (err: any) {
      setExpensesError(err.response.data.message);
      dispatch(error());
    }
  };

  return {
    expenses,
    expensesError,
    depositMoneyHandler,
    totalMoney,
    buyTicketHandler,
    lineChartData,
  };
};
