import styled from 'styled-components';
import Onboarding from '../components/onBoarding/OnBoarding';
import Header from '../components/Header/Header';

const OnBoardingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Onboarding />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1fbfa;
`;
export default OnBoardingPage;
