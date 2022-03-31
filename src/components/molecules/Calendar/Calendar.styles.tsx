import { ViewWrapper } from 'components/templates/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const StyledViewWrapper = styled(ViewWrapper)`
  display: none;
  @media (min-width: 1600px) {
    display: block;
    grid-column: 4;
    grid-row: 4/5;
    padding: 2rem;
    height: 100%;
    width: 500px;
  }
`;
