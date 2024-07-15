import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectRole from '../SelectRole/SelectRole';
import SelectTime from '../SelectTime/SelectTime';
import { getUserName } from '../../apis/user';
import * as S from './OnBoarding.styles';

type Role = 'driver' | 'navigator';

const Onboarding = () => {
  const navigate = useNavigate();
  // const { roomId } = useParams() as { roomId: string };

  const [userName, setUserInfo] = useState<{ id: number; nameA: string; nameB: string } | null>(null);
  const [navigator, setNavigator] = useState<string>('');
  const [driver, setDriver] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserName();
        setUserInfo(data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };
    fetchUserInfo();
  }, []);

  const handleSelect = (role: Role, event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectName = event.target.value;
    if (!userName) return;
    if (role === 'driver') {
      setDriver(selectName);
      setNavigator(selectName === userName?.nameA ? userName.nameB : userName.nameB);
    } else {
      setNavigator(selectName);
      setDriver(selectName === userName?.nameA ? userName.nameB : userName.nameB);
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

  const isEmpty = navigator === '' || driver === '' || time === 0;

  return (
    <S.OnboardingContainer>
      {userName ? (
        <>
          <S.SettingBox>
            <S.Title>드라이버 / 내비게이터 설정</S.Title>
            <SelectRole navigator={navigator} driver={driver} name={userName} handleSelect={handleSelect} />
          </S.SettingBox>
          <S.SettingBox>
            <S.Title>타이머 시간 설정</S.Title>
            <SelectTime handleTime={handleTime} currentTime={time}></SelectTime>
          </S.SettingBox>
          <S.CompleteButton disabled={isEmpty} $isActive={!isEmpty} onClick={handleComplete}>
            완료
          </S.CompleteButton>
        </>
      ) : (
        <div>Loading</div>
      )}
    </S.OnboardingContainer>
  );
};

export default Onboarding;
