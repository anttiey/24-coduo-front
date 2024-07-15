import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 17.8vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary.main};
  font-size: 6rem;

  span {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Button = styled.button`
  padding: 1.8rem 8rem;
  background: ${({ theme }) => theme.color.primary.main};
  border-radius: 10rem;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
`;
