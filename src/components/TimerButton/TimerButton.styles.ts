import styled from 'styled-components';

export const CustomTimeInput = styled.input`
  width: 35rem;
  border-radius: 1rem;
  border: 1px solid #0094a0;
  padding: 0 1rem;
`;

export const Timer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const TimerButtonStyle = styled.button<{ active: boolean }>`
  width: 9.5rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.active ? '#0094a0' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#0094a0')};

  border: 1px solid #0094a0;
  border-radius: 20px;
  &:hover {
    background-color: #0094a0;
    color: white;
  }
`;
