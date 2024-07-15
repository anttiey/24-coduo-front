import styled, { keyframes } from 'styled-components';
import type { Position } from './Modal.type';

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Mapper
const heightMapper = {
  bottom: '90vh',
  center: '70vh',
};

const radiusMapper = {
  bottom: '8px 8px 0 0',
  center: '8px',
};

const marginMapper = {
  bottom: '0',
  center: '0 36px',
};

// Style
export const Layout = styled.div<{ $position: Position }>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: ${({ $position }) => ($position === 'bottom' ? 'flex-end' : 'center')};
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.3s ease;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
`;

export const Container = styled.div<{
  $width: string;
  $position: Position;
}>`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease-in forwards;
  width: ${({ $width }) => $width};
  max-height: ${({ $position }) => heightMapper[$position] || heightMapper.center};
  border-radius: ${({ $position }) => radiusMapper[$position] || radiusMapper.center};
  margin: ${({ $position }) => marginMapper[$position] || marginMapper.center};
`;
