import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderElement = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  border-top: 4px solid #4460F7;
  width: 56px;
  height: 56px;
  animation: ${rotate} .5s linear infinite;
`;

const Loader = () => (
    <LoaderElement />
);

export default Loader;
