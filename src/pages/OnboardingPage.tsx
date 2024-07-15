import styled from 'styled-components';
import Onboarding from '../components/onBoarding/OnBoarding';

const OnBoardingPage = () => {
  return (
    <Container>
      <Onboarding />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1fbfa;
`;
export default OnBoardingPage;
