import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const Info = styled.p`
  padding-top: 0.7rem;
  color: #aaa;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Input = styled.input`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.primary.dark};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  padding: 1.8rem 8rem;
  background: ${({ theme }) => theme.color.primary.main};
  border-radius: 10rem;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
`;

export const SmallButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.primary.main};
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.primary.main};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
`;

export const SubmitButton = styled.input<{ $isActive: boolean }>`
  padding: 1.8rem 8rem;
  background: ${({ $isActive }) => ($isActive ? ({ theme }) => theme.color.primary.main : '#AAA')};
  border-radius: 10rem;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: ${({ $isActive }) => $isActive && 'pointer'};
`;

export const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const CodeText = styled.p`
  color: ${({ theme }) => theme.color.primary.dark};
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
