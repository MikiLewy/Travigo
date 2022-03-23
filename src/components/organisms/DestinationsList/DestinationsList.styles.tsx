import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin-top: 3rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
  max-width: 550px;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  @media ${queries.phone} {
    margin-bottom: 1.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${queries.phone} {
    flex-direction: row;
  }
`;
export const Destinations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const Description = styled.p`
  @media ${queries.phone} {
    font-size: 14px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: transparent;
  border-radius: 12px;
  img {
    width: 13px;
  }
`;
export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.navy};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  @media ${queries.phone} {
    padding: 0.5rem 1.25rem;
  }
`;
