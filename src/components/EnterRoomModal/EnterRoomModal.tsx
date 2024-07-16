import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { getUserName } from '../../apis/user';
import * as S from './EnterRoomModal.styles';

interface EnterRoomModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const EnterRoomModal = ({ isModalOpen, closeModal }: EnterRoomModalProps) => {
  const navigate = useNavigate();

  const [accessCode, setAccessCode] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setAccessCode(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await getUserName(accessCode);
      navigate(`/room/${accessCode}/onboarding`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <Modal isOpen={isModalOpen} close={closeModal}>
      <S.Layout>
        <S.Header>방 참가 코드를 입력하세요</S.Header>
        <S.Form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <S.Input type="text" id="accessCode" value={accessCode} onChange={handleChange} required />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton
              type="submit"
              value="방 참가하기"
              disabled={accessCode === ''}
              $isActive={accessCode !== ''}
            ></S.SubmitButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Layout>
    </Modal>
  );
};

export default EnterRoomModal;
