import { useState } from 'react';
import { styled } from 'styled-components';

interface TimerButtonProp {
  handleTime: (time: number) => void;
  handleSelect: (select: boolean) => void;
  isSelect: boolean;
  time?: number;
  auto?: boolean;
  currentTime: number;
}

const TimerButton = ({ auto, handleTime, time, currentTime, handleSelect, isSelect }: TimerButtonProp) => {
  const [customTime, setCustomTime] = useState<string>();

  const handleClick = () => {
    if (auto) {
      handleSelect(!isSelect);
      handleTime(Number(customTime));
    } else {
      handleSelect(false);
      time && handleTime(time);
    }
  };

  return (
    <>
      {auto ? (
        <Timer>
          <TimerButtonStyle active={isSelect} onClick={() => handleClick()}>
            직접설정
          </TimerButtonStyle>
          {isSelect && (
            <CustomTimeInput
              placeholder="시간을 입력해주세요(분)"
              value={customTime}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCustomTime(event.target.value);
              }}
              type="number"
            />
          )}
        </Timer>
      ) : (
        <TimerButtonStyle
          active={currentTime === time && !isSelect}
          onClick={() => {
            handleClick();
          }}
        >
          {time} 분
        </TimerButtonStyle>
      )}
    </>
  );
};

const CustomTimeInput = styled.input`
  width: 35rem;
  height: 5rem;
  border: 1px solid #0094a0;
  padding: 0 1rem;
`;

const Timer = styled.div`
  display: flex;
  gap: 3rem;
`;

const TimerButtonStyle = styled.button<{ active: boolean }>`
  width: 7.5rem;
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

export default TimerButton;
