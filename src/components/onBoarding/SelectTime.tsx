import { styled } from 'styled-components';
import TimerButton from './TimerButton';
import { useState } from 'react';

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
    <TimerButtonContainer>
      <TimerBox>
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
      </TimerBox>
      <TimerButton
        handleTime={handleTime}
        currentTime={currentTime}
        auto={true}
        handleSelect={handleSelect}
        isSelect={isSelect}
      />
    </TimerButtonContainer>
  );
};

const TimerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TimerBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SelectTime;
