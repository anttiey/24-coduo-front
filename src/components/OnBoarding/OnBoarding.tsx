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
    navigate(`/room/1`, {
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
        active={navigator !== '' && driver !== '' && time !== 0}
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
  width: 70rem;
  height: 60rem;

  display: flex;
  font-size: 2rem;

  flex-direction: column;
  background-color: white;

  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0rem 4rem;

  gap: 6rem;
`;

const SettingBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CompleteButton = styled.button<{ active: boolean }>`
  width: 35rem;
  height: 5rem;

  background-color: ${(props) => (props.active ? '#24d4c3' : '#b9b9b9')};

  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6rem;

  &:hover {
    background-color: #24d4c3;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;
  color: #00506b;
`;

export default Onboarding;