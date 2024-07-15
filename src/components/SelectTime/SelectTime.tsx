import { useState } from 'react';

import TimerButton from '../TimerButton/TimerButton';
import * as S from './SelectTime.styles';

interface SelectTime {
  handleTime: (time: number) => void;
  currentTime: number;
}

const SelectTime = ({ handleTime, currentTime }: SelectTime) => {
  const [isSelect, setIsSelect] = useState(false);
  const handleSelect = (select: boolean) => {
    setIsSelect(select);
  };
  return (
    <S.TimerButtonContainer>
      <S.TimerBox>
        <TimerButton
          handleTime={handleTime}
          time={5}
          currentTime={currentTime}
          handleSelect={handleSelect}
          isSelect={isSelect}
        />
        <TimerButton
          handleTime={handleTime}
          time={10}
          currentTime={currentTime}
          handleSelect={handleSelect}
          isSelect={isSelect}
        />
        <TimerButton
          handleTime={handleTime}
          time={15}
          currentTime={currentTime}
          handleSelect={handleSelect}
          isSelect={isSelect}
        />
      </S.TimerBox>
      <TimerButton
        handleTime={handleTime}
        currentTime={currentTime}
        auto={true}
        handleSelect={handleSelect}
        isSelect={isSelect}
      />
    </S.TimerButtonContainer>
  );
};

export default SelectTime;
