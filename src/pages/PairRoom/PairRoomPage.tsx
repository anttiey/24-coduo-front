import { useState, useCallback, useRef, useEffect } from 'react';
import { VscDebugStart, VscDebugPause } from 'react-icons/vsc';
import { CgArrowsExchange } from 'react-icons/cg';
import * as S from './PairRoomPage.styles';

const TIMER = 10000;
const USER = [
  { name: '파슬리', role: 'navigator' },
  { name: '해시', role: 'driver' },
];

const PairRoomPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [driver, setDriver] = useState(USER.find((user) => user.role === 'driver'));
  const [navigator, setNavigator] = useState(USER.find((user) => user.role === 'navigator'));
  const [time, setTime] = useState(TIMER);
  const startTime = useRef<number | null>(null);
  const pauseTime = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleChangeRole = () => {
    setDriver(navigator);
    setNavigator(driver);
    startTime.current = null;
    pauseTime.current = null;
    handleStart();
  };

  const handleStart = useCallback(() => {
    if (startTime.current === null) {
      startTime.current = Date.now();
    } else if (pauseTime.current !== null) {
      startTime.current += Date.now() - pauseTime.current;
    }
    setIsRunning(true);
  }, [startTime, pauseTime]);

  const handlePause = useCallback(() => {
    if (startTime.current !== null) {
      pauseTime.current = Date.now();
    }
    setIsRunning(false);
  }, [startTime, pauseTime]);

  const getTime = useCallback(() => {
    if (startTime.current === null) return TIMER;
    const elapsed = isRunning ? Date.now() - startTime.current : pauseTime.current! - startTime.current;
    return Math.max(TIMER - elapsed, 0);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(getTime());
      }, 20);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, getTime, time]);

  const progress = (time / TIMER) * 100;
  const isTimeUp = time === 0;

  return (
    <S.Container>
      <S.RoleTextContainer>
        <S.RoleText style={{ textAlign: 'left' }}>
          드라이버 <br />
          <span>{driver?.name}</span>
        </S.RoleText>
        <S.RoleText style={{ textAlign: 'right' }}>
          내비게이터 <br />
          <span>{navigator?.name}</span>
        </S.RoleText>
      </S.RoleTextContainer>
      <S.TimerContainer>
        <S.Timer progress={progress} isTimeUp={isTimeUp}>
          <S.TimerText isTimeUp={isTimeUp}>
            <S.TimerTextDetail>{'0' + Math.floor(time / 60000)}</S.TimerTextDetail>:
            <S.TimerTextDetail>{('0' + (Math.floor(time / 1000) % 60)).slice(-2)}</S.TimerTextDetail>:
            <S.TimerTextDetail>{time < 60000 && <>{('00' + (time % 1000)).slice(-2)}</>}</S.TimerTextDetail>
          </S.TimerText>
        </S.Timer>
      </S.TimerContainer>
      <S.ButtonWrapper>
        <S.Button onClick={handleStart} disabled={isRunning || isTimeUp}>
          <VscDebugStart />
        </S.Button>
        <S.Button onClick={handlePause} disabled={!isRunning || isTimeUp}>
          <VscDebugPause />
        </S.Button>
        <S.Button onClick={handleChangeRole} isTimeUp={isTimeUp}>
          <CgArrowsExchange />
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default PairRoomPage;
