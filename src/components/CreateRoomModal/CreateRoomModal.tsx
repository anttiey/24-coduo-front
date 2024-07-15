import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { addPairRoom } from '../../apis/room';
import * as S from './CreateRoomModal.styles';

interface CreateRoomModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const CreateRoomModal = ({ isModalOpen, closeModal }: CreateRoomModalProps) => {
  const navigate = useNavigate();

  const [pair, setPair] = useState<{ first: string; second: string }>({ first: '', second: '' });

  const isPairEmpty = !pair.first || !pair.second;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setPair((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const accessCode = await addPairRoom(pair.first, pair.second);
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
        <S.Header>여러분의 이름(또는 닉네임)을 알려주세요!</S.Header>
        <S.Form onSubmit={handleSubmit}>
          <S.InputWrapper>
            <S.Label htmlFor="first">페어 1</S.Label>
            <S.Input type="text" id="first" value={pair.first} onChange={handleChange} required />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="second">페어 2</S.Label>
            <S.Input type="text" id="second" value={pair.second} onChange={handleChange} required />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton
              type="submit"
              value="방 만들기"
              disabled={isPairEmpty}
              $isActive={!isPairEmpty}
            ></S.SubmitButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Layout>
    </Modal>
  );
};

export default CreateRoomModal;
