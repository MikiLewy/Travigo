import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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
  min-height: 300px;
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
