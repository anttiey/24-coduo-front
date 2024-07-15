import { useState } from 'react';

import * as S from './TimerButton.styles';

interface TimerButtonProp {
  handleTime: (time: number) => void;
  handleSelect: (select: boolean) => void;
  isSelect: boolean;
  time?: number;
  auto?: boolean;
  currentTime: number;
}

const TimerButton = ({ auto, handleTime, time, currentTime, handleSelect, isSelect }: TimerButtonProp) => {
  const [customTime, setCustomTime] = useState<number>();

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
        <S.Timer>
          <S.TimerButtonStyle $isActive={isSelect} onClick={() => handleClick()}>
            직접설정
          </S.TimerButtonStyle>
          {isSelect && (
            <S.CustomTimeInput
              placeholder="시간을 입력해주세요(분)"
              value={customTime}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCustomTime(Number(event.target.value));
                handleTime(Number(event.target.value));
              }}
              type="number"
            />
          )}
        </S.Timer>
      ) : (
        <S.TimerButtonStyle
          $isActive={currentTime === time && !isSelect}
          onClick={() => {
            handleClick();
          }}
        >
          {time} 분
        </S.TimerButtonStyle>
      )}
    </>
  );
};

export default TimerButton;
