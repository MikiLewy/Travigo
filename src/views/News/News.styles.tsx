import styled from 'styled-components';
import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin-bottom: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    align-items: flex-start;
    grid-column: 2/-1;
    width: 100%;
    gap: 2rem;
    margin: 1rem 0 5rem;
  }
`;

export const StyledViewWrapper = styled(ViewWrapper)`
  padding: 2rem;
  @media ${queries.phone} {
    width: 450px;
  }
  @media ${queries.biggerTablet} {
    height: 550px;
    display: flex;
    flex-direction: column;
    width: 48%;
    margin: 2rem 0 0;
  }
  @media ${queries.desktop} {
    width: 32%;
    margin: 3rem 0 0;
    height: 570px;
  }
  @media (min-width: 1600px) {
    width: 30%;
    margin: 3rem 0 0;
  } ;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;
export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${queries.biggerTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
  }
  @media ${queries.desktop} {
    justify-content: flex-start;
    gap: 20px;
  }
  @media (min-width: 1600px) {
    width: 95%;
    justify-content: space-between;
  } ;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.sd};
  font-weight: 600;
  max-width: 20ch;
  @media ${queries.phone} {
    max-width: 28ch;
    font-size: ${({ theme }) => theme.fontSize.m};
  } ;
`;
export const Category = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.s};
  } ;
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-align: right;
  width: 100%;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 2px;
  } ;
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 160%;
  max-width: 45ch;
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.s};
    max-width: 42ch;
  }
  @media ${queries.desktop} {
    margin-bottom: 2rem;
  } ;
`;

export const StyledButton = styled(Button)`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.dimmedBlack};
  border: 1px solid ${({ theme }) => theme.colors.dimmedBlack};
  width: 125px;
  margin: 15px 0 10px;
  @media ${queries.phone} {
    margin-top: 10px;
    width: 150px;
    padding: 10px 20px;
  }
  @media ${queries.phone} {
    margin-top: 10px;
    width: 150px;
    padding: 10px 20px;
  }
  @media ${queries.biggerTablet} {
    margin-top: auto;
  } ;
`;
