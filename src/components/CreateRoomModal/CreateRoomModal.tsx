import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { addPairRoom } from '../../apis/room';
import * as S from './CreateRoomModal.styles';

interface CreateRoomModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const CreateRoomModal = ({ isModalOpen, closeModal }: CreateRoomModalProps) => {
  const [pair, setPair] = useState<{ first: string; second: string }>({ first: '', second: '' });
  const [accessCode, setAccessCode] = useState('');

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
      setAccessCode(accessCode);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(accessCode);
    alert('복사가 완료되었습니다.');
  };

  return (
    <Modal isOpen={isModalOpen} close={closeModal}>
      {!accessCode ? (
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
      ) : (
        <S.Layout>
          <div>
            <S.Header>페어룸 코드가 생성되었습니다!</S.Header>
            <S.Info>해당 코드를 복사하여 다음부터 바로 방에 참가하실 수 있습니다.</S.Info>
          </div>
          <div>
            <S.CodeContainer>
              <S.CodeText>{accessCode}</S.CodeText>
              <S.SmallButton onClick={copyText}>복사</S.SmallButton>
            </S.CodeContainer>
            <S.ButtonWrapper>
              <Link to={`/room/${accessCode}/onboarding`}>
                <S.Button>완료</S.Button>
              </Link>
            </S.ButtonWrapper>
          </div>
        </S.Layout>
      )}
    </Modal>
  );
};

export default CreateRoomModal;
