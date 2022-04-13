import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  .fc {
    max-height: 800px;
  }
  .fc .fc-toolbar-title {
    font-size: ${({ theme }) => theme.fontSize.sd};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  .fc .fc-today-button,
  .fc .fc-button,
  .fc .fc-button-primary {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  @media ${queries.phone} {
    display: block;
    width: 100%;
    max-width: 600px;
    margin-bottom: 7rem;
  }
  @media ${queries.biggerTablet} {
    max-width: 95%;
    width: 95%;
    grid-column: 1/-1;
    grid-row: 3;
    .fc {
      max-height: 800px;
    }
  }
`;
