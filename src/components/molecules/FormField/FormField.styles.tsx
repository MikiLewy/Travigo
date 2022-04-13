import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
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

export const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
