// import { useState } from 'react';
import { styled } from 'styled-components';
import SelectRole from './SelectRole';
import { useState } from 'react';
import SelectTime from './SelectTime';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  // const { roomId } = useParams();
  // const userName = getUserName(roomId);
  // const [name, setName] = useState(userName);

  // const roomId = 10;
  const name = ['해시', '헤인'];
  const navigate = useNavigate();
  const [navigator, setNavigator] = useState<string>('');
  const [driver, setDriver] = useState<string>('');

  const [time, setTime] = useState<number>(0);

  const handleSelect = (role: 'driver' | 'navigator', event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectName = event.target.value;
    if (role === 'driver') {
      setDriver(selectName);
      setNavigator(selectName === name[0] ? name[1] : name[0]);
    } else {
      setNavigator(selectName);
      setDriver(selectName === name[0] ? name[1] : name[0]);
    }
  };

  const handleTime = (time: number) => {
    setTime(time);
  };

  const handleComplete = () => {
    if (navigator === '' || driver === '') {
      alert('역할을 정해주세요');
      return;
    }
    if (time === 0) {
      alert('시간을 정해주세요');
      return;
    }
    navigate(`onboarding`, {
      state: {
        user: [
          { name: navigator, role: 'navigator' },
          { name: driver, role: 'driver' },
        ],
        timer: time * 60000,
      },
    });
  };
  return (
    <OnboardingContainer>
      <SettingBox>
        <Title>드라이버 / 내비게이터 설정</Title>
        <SelectRole navigator={navigator} driver={driver} name={name} handleSelect={handleSelect} />
      </SettingBox>
      <SettingBox>
        <Title>타이머 시간 설정</Title>
        <SelectTime handleTime={handleTime} currentTime={time}></SelectTime>
      </SettingBox>

      <CompleteButton
        onClick={() => {
          handleComplete();
        }}
      >
        완료
      </CompleteButton>
    </OnboardingContainer>
  );
};

const OnboardingContainer = styled.div`
  width: 40rem;
  height: 41.9375rem;
  display: flex;

  flex-direction: column;
  background-color: white;

  align-items: center;
  border-radius: 1rem;
  padding: 3rem 2.5rem;

  gap: 5rem;
`;

const SettingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CompleteButton = styled.button`
  position: relative;
  bottom: -6rem;

  width: 25rem;
  height: 3rem;

  background-color: #b9b9b9;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;

  &:hover {
    background-color: #24d4c3;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #00506b;
`;

export default Onboarding;
