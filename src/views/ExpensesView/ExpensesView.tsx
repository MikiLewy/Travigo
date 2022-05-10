import Headline from 'components/atoms/Headline/Headline';
import { Card, ContentWrapper, Price, StyledViewWrapper, Subtitle, Wrapper, ExpensesWrapper, Message } from './ExpensesView.styles';
import card from 'assets/images/creditCard.png';
import { Line } from 'react-chartjs-2';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useExpenses } from 'hooks/useExpenses';
import { useForm } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

interface ExpensesViewProps {}

const ExpensesView: React.FC<ExpensesViewProps> = () => {
  const { lineChartData, expensesError, depositMoneyHandler, totalMoney } = useExpenses();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Headline title="Expenses" content="See your recent expenses " />
      {expensesError ? <ErrorMessage message={expensesError} /> : ''}
      <ContentWrapper>
        <Card isSec>
          <Subtitle>Current balance</Subtitle>
          <Price>${totalMoney}</Price>
        </Card>
        <Card>
          <Subtitle>Deposit money</Subtitle>
          <form action="" onSubmit={handleSubmit(depositMoneyHandler)}>
            <FormField label="Amount of money" id="amount" type="number" {...register('amount', { required: true })} name="amount" />
            {errors.amount && <Message isError>This field cannot be empty</Message>}
            <Button>Deposit</Button>
          </form>
        </Card>
        <StyledViewWrapper>
          <Subtitle>My cards</Subtitle>
          <div>
            <img src={card} alt="credit card" />
          </div>
        </StyledViewWrapper>
        <ExpensesWrapper>
          <Line
            style={{ width: '500px', height: '300px' }}
            data={lineChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  ticks: {
                    callback: function (value) {
                      return `$${value}`;
                    },
                  },
                },
              },
            }}
          />
        </ExpensesWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ExpensesView;
