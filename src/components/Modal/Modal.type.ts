export type Position = 'center' | 'bottom';

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  width?: string;
  position?: Position;
}
