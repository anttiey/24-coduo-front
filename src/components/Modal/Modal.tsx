import { createPortal } from 'react-dom';
import useEscapeKey from '../../hooks/useEscapeKey';
import useFocusTrap from '../../hooks/useFocusTrap';
import usePreventScroll from '../../hooks/usePreventScroll';

import type { ModalProps } from './Modal.type';

import * as S from './Modal.styles';

const Modal = ({
  isOpen,
  close,
  children,
  width = '50%',
  position = 'center',
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = useFocusTrap(isOpen);

  useEscapeKey(isOpen, close);
  usePreventScroll(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <S.Layout ref={modalRef} $position={position}>
      <S.Backdrop onClick={close} />
      <S.Container $width={width} $position={position}>
        {children}
      </S.Container>
    </S.Layout>,
    document.body,
  );
};

export default Modal;
