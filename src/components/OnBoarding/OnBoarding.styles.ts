import styled from 'styled-components';

export const OnboardingContainer = styled.div`
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

export const SettingBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CompleteButton = styled.button<{ $isActive: boolean }>`
  width: 35rem;
  height: 5rem;
  background-color: ${(props) => (props.$isActive ? '#24D4C3' : '#B9B9B9')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  &:hover {
    background-color: ${(props) => (props.$isActive ? 'rgba(0, 185, 165, 1)' : '#B9B9B9')};
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  color: #00506b;
`;
