import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 500px 500px 1fr;
    width: 100%;
    gap: 2rem;
    margin: 1rem 0 5rem;
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 7rem;
  gap: 10px;
  @media ${queries.phone} {
    margin: 4rem auto;
    h5 {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
  @media ${queries.biggerTablet} {
    grid-column: 1;
    grid-row: 2/4;
    margin: 0;
    h5 {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const StyledBtn = styled(Button)`
  width: 35%;
  margin: 10px auto 0;
  @media ${queries.phone} {
    width: 30%;
    padding: 7px 20px;
    margin: 5px 0;
  }
  @media ${queries.biggerTablet} {
    width: 20%;
  }
  @media ${queries.desktop} {
    width: 30%;
  }
`;
