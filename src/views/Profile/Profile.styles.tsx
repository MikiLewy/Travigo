import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { queries } from 'helpers/mediaQueries';

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
    grid-column: 2;
    grid-row: 3/4;
    margin: 0;
    h5 {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  @media ${queries.desktop} {
    grid-column: 2;
    grid-row: 1/4;
    margin: 0;
    h5 {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media ${queries.phone} {
    width: 70%;
  }
  @media ${queries.biggerTablet} {
    width: 40%;
  }
  @media ${queries.desktop} {
    width: 65%;
    gap: 5px;
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
