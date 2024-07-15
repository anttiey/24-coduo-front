import styled from 'styled-components';

export const SelectLabel = styled.label<{ name: string }>`
  color: #0094a0;
  margin-right: ${({ name }) => (name === 'driver' ? '1.7rem' : '0rem')};
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 30rem;
  height: 4.1875rem;
  border: 1px solid #0094a0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
