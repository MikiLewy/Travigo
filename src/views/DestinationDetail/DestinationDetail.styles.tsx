import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { baseURL } from 'helpers/baseUrl';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.header<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${baseURL}/images/destinations/${imageUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${queries.tablet} {
    min-height: 300px;
  }
  @media ${queries.laptop} {
    min-height: 400px;
  }
  h2 {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 1;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ReturnWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  @media ${queries.tablet} {
    top: 30px;
    left: 30px;
  }
  @media ${queries.laptop} {
    top: 50px;
    left: 50px;
  }
  @media ${queries.desktop} {
    top: 55px;
    left: 100px;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  svg {
    fill: ${({ theme }) => theme.colors.white};
    transform: scale(0.85);
    @media ${queries.laptop} {
      margin-right: 2px;
      transform: scale(1);
    }
    @media ${queries.desktop} {
      margin-right: 5px;
      transform: scale(1.25);
    }
  }
`;

export const IconWrapper = styled.div<{ isAdded: boolean }>`
  position: absolute;
  top: 20px;
  right: 25px;
  z-index: 1;
  cursor: pointer;
  @media ${queries.tablet} {
    top: 30px;
    right: 35px;
  }
  @media ${queries.laptop} {
    top: 55px;
    right: 65px;
  }
  @media ${queries.desktop} {
    top: 55px;
    right: 100px;
  }
  svg {
    fill: ${({ theme, isAdded }) => (isAdded ? theme.colors.error : 'grey')};
    transform: scale(0.9);
    transition: fill 0.3s ease-in-out;
    @media ${queries.tablet} {
      transform: scale(1.25);
    }
    @media ${queries.laptop} {
      transform: scale(1.5);
    }
    @media ${queries.desktop} {
      transform: scale(1.75);
    }
  }
`;

export const ContentWrapper = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 1200px;
  @media ${queries.laptop} {
    margin: 3rem auto 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media ${queries.laptop} {
    margin-bottom: 1rem;
  }
  h4 {
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.md};
      @media ${queries.laptop} {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
  p {
    display: flex;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.sd};
      @media ${queries.laptop} {
        font-size: ${({ theme }) => theme.fontSize.md};
      }
    }
    svg {
      margin-left: -3px;
      transform: scale(0.5);
      @media ${queries.tablet} {
        margin-left: 0;
        transform: scale(0.7);
      }
      @media ${queries.laptop} {
        margin: 2px 0 0 2px;
        transform: scale(0.8);
      }
    }
  }
`;
export const DescriptionWrapper = styled.div`
  margin: 1rem 0 1.5rem;
  h4 {
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  p {
    max-width: 38ch;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.md};
      max-width: 48ch;
    }
  }
`;

export const StyledButton = styled(Button)`
  @media ${queries.tablet} {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.sd};
  }
  @media ${queries.desktop} {
    padding: 1rem 3rem;
  }
`;

export const Message = styled.p`
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.sd};
  }
`;
