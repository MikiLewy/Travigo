import Headline from 'components/atoms/Headline/Headline';
import React from 'react';
import { ContentWrapper, Wrapper } from './ExpensesView.styles';

interface ExpensesViewProps {}

const ExpensesView: React.FC<ExpensesViewProps> = () => {
  return (
    <Wrapper>
      <Headline title="Expenses" content="See your recent expenses " />
      <ContentWrapper>
        <h3>Work in progress...</h3>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ExpensesView;
