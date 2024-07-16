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
  height: calc(100vh - 8rem);
  padding: 4rem;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const Timer = styled.div.attrs<{ $progress: number }>((props) => ({
  style: {
    background: `conic-gradient(#00e0c8 ${props.$progress}%, #ddd ${props.$progress}%)`,
  },
}))<{ $progress: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48rem;
  height: 48rem;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 44rem;
    height: 44rem;
    background: #fff;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const TimerText = styled.div<{ $isTimeUp?: boolean }>`
  display: flex;
  font-size: 6rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ $isTimeUp }) =>
    $isTimeUp &&
    css`
      color: #ff6951;
    `}
`;

export const TimerTextDetail = styled.p`
  width: 10rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<{ $isTimeUp?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  margin: 0.5rem;
  border: none;
  border-radius: 50%;
  background-color: #ffc453;
  cursor: pointer;
  font-size: 4rem;
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

  ${({ $isTimeUp }) =>
    $isTimeUp &&
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
  font-size: 4rem;
  font-weight: 600;
  color: #333333;
  margin: 5px 0;
  text-align: center;
  line-height: 8rem;
  span {
    color: #006c81;
  }
`;
