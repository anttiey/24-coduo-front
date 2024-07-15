import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% {
    background-color: #FFC453; /* Original color */
  }
  50% {
    background-color: #ff6951;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;
`;

export const Timer = styled.div<{ progress: number; isTimeUp?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  background: conic-gradient(#00e0c8 ${({ progress }) => progress}%, #ddd ${({ progress }) => progress}%);
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 24rem;
    height: 24rem;
    background: #fff;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const TimerText = styled.p<{ isTimeUp?: boolean }>`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  ${({ isTimeUp }) =>
    isTimeUp &&
    css`
      color: #ff6951;
    `}
`;

export const TimerTextDetail = styled.p`
  width: 7rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{ isTimeUp?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  border: none;
  border-radius: 50%;
  background-color: #ffc453;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #db9e3c;
  }

  &:active {
    background-color: #b87c2a;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }

  ${({ isTimeUp }) =>
    isTimeUp &&
    css`
      animation: ${blink} 1s infinite;
    `}
`;

export const RoleTextContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const RoleText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #333333;
  margin: 5px 0;
  text-align: center;
  line-height: 5rem;
  span {
    color: #006c81;
  }
`;
