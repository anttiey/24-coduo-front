import { useState, useCallback, useRef, useEffect } from 'react';
import { VscDebugStart, VscDebugPause } from 'react-icons/vsc';
import { CgArrowsExchange } from 'react-icons/cg';
import * as S from './PairRoomPage.styles';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';

const PairRoomPage = () => {
  const location = useLocation();

  const timer = location.state.timer;

  const [isRunning, setIsRunning] = useState(false);
  const [driver, setDriver] = useState(
    location.state.user.find((user: { name: string; role: string }) => user.role === 'driver'),
  );
  const [navigator, setNavigator] = useState(
    location.state.user.find((user: { name: string; role: string }) => user.role === 'navigator'),
  );
  const [time, setTime] = useState<number>(timer);
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
    if (startTime.current === null) return timer;
    const elapsed = isRunning ? Date.now() - startTime.current : pauseTime.current! - startTime.current;
    return Math.max(timer - elapsed, 0);
  }, [isRunning, timer]);

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

  const progress = (time / timer) * 100;
  const isTimeUp = time === 0;

  return (
    <>
      <Header />
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
          <S.Timer $progress={progress}>
            <S.TimerText $isTimeUp={isTimeUp}>
              <S.TimerTextDetail>{('0' + Math.floor(time / 60000)).slice(-2)}</S.TimerTextDetail>:
              <S.TimerTextDetail>{('0' + (Math.floor(time / 1000) % 60)).slice(-2)}</S.TimerTextDetail>
              {time < 60000 && (
                <>
                  <p>:</p>
                  <S.TimerTextDetail>{('0' + (time % 1000)).slice(-2)}</S.TimerTextDetail>
                </>
              )}
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
          <S.Button onClick={handleChangeRole} $isTimeUp={isTimeUp}>
            <CgArrowsExchange />
          </S.Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default PairRoomPage;
