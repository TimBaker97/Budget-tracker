import React from 'react';
import styled, { keyframes } from 'styled-components';

const Float = () => {
  const { width, height } = useWindowSize();

  console.log(width, height);

  const moveFloat = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }
`;

  const FloatStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(300px);
    animation: ${moveFloat} 15s alternate linear infinite;
  `;
  return <FloatStyled></FloatStyled>;
};

export default Float;
