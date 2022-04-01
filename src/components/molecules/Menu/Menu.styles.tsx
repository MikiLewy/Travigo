import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1rem;
  z-index: 5;

  @media ${queries.biggerTablet} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBtn = styled.button`
  border: none;
`;
