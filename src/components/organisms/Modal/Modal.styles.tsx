import FormField from 'components/molecules/FormField/FormField';
import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Overlay = styled.div<{ inside?: boolean }>`
  position: ${({ inside }) => (inside ? 'absolute' : 'fixed')};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ inside }) => (inside ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.8)')};
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-height: 500px;
  width: 90%;
  max-width: 550px;
  border-radius: 15px;
  z-index: 11;
  text-align: center;
  padding-bottom: 1rem;
  @media ${queries.tablet} {
    padding-bottom: 3rem;
  }
  @media ${queries.laptop} {
    max-width: 600px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 95%;
  margin: 2rem auto 0;
  padding: 0 2rem 2rem;
  gap: 10px;
`;

export const Title = styled.h3<{ isWhite?: boolean }>`
  margin-top: ${({ isWhite }) => (isWhite ? '' : '5rem')};
  position: ${({ isWhite }) => (isWhite ? 'relative' : 'auto')};
  text-transform: uppercase;
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.dimmedBlack)};
  font-size: ${({ theme }) => theme.fontSize.m};
  z-index: ${({ isWhite }) => (isWhite ? '12' : '')};
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 1px;
  }
`;

export const Background = styled.div<{ url: string }>`
  position: relative;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${queries.tablet} {
    height: 200px;
  }
  @media ${queries.laptop} {
    height: 250px;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  p:nth-child(1) {
    font-weight: 600;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  text-align: left;
  div {
    width: 100%;
    max-width: 400px;
  }
  @media ${queries.phone} {
    width: 100%;
  }
  @media ${queries.biggerTablet} {
    width: 100%;
  }
  @media ${queries.desktop} {
    width: 100%;
    gap: 5px;
  }
`;
