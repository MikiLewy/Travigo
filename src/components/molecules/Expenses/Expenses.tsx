import React from 'react';
import { ChartWrapper, ContentWrapper, StyledViewWrapper, Wrapper } from './Expenses.styles';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { ArrowBtn } from 'components/atoms/ArrowBtn/ArrowBtn';
ChartJS.register(...registerables);

interface ExpensesProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
}

const Expenses: React.FC<ExpensesProps> = ({ chartData }) => {
  return (
    <StyledViewWrapper>
      <Wrapper>
        <ContentWrapper>
          <div>
            <Subtitle>Expenses</Subtitle>
            <p>See your latest expenses</p>
          </div>
          <ArrowBtn>
            See all
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </ArrowBtn>
        </ContentWrapper>
        <ChartWrapper>
          <Line
            style={{ width: '500px', height: '300px' }}
            data={chartData}
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
        </ChartWrapper>
      </Wrapper>
    </StyledViewWrapper>
  );
};

export default Expenses;
