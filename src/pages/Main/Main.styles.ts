import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8rem);
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

export const MainImage = styled.img`
  width: 50%;
  padding: 3.6rem 0;
`;

export const Info = styled.p`
  padding-top: 2rem;
  color: #00758b;
  font-size: 2rem;
  text-align: center;
  line-height: 3.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const CreateButton = styled.button`
  padding: 1.8rem 8rem;
  background: ${({ theme }) => theme.color.primary.main};
  border-radius: 10rem;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
`;

export const EnterButton = styled.button`
  padding: 1.8rem 8rem;
  border: 1px solid ${({ theme }) => theme.color.primary.main};
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.primary.main};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
`;
