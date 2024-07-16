import { useState } from 'react';

import Header from '../../components/Header/Header';
import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal';
import EnterRoomModal from '../../components/EnterRoomModal/EnterRoomModal';
import { MainImage } from '../../assets';

import * as S from './Main.styles';

const Main = () => {
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isEnterRoomModalOpen, setIsEnterRoomModalOpen] = useState(false);

  const openCreateRoomModal = () => setIsCreateRoomModalOpen(true);
  const closeCreateRoomModal = () => setIsCreateRoomModalOpen(false);

  const openEnterRoomModal = () => setIsEnterRoomModalOpen(true);
  const closeEnterRoomModal = () => setIsEnterRoomModalOpen(false);

  return (
    <>
      <Header />
      <S.Layout>
        <S.TitleContainer>
          <S.MainImage src={MainImage} alt="메인 로고 이미지" />
          <S.SubTitle>협업의 힘을 경험하세요. 코딩해듀오가 도와드립니다!</S.SubTitle>
          <S.Info>
            코딩해듀오는 페어프로그래밍을 통해 더 나은 결과를 만들어내는 것을 목표로 합니다.
            <br />
            직관적인 인터페이스와 실시간 협업 도구로, 누구나 쉽게 사용할 수 있습니다.
          </S.Info>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.CreateButton onClick={openCreateRoomModal}>방 생성하기</S.CreateButton>
          <S.EnterButton onClick={openEnterRoomModal}>방 참가하기</S.EnterButton>
        </S.ButtonContainer>
        <CreateRoomModal isModalOpen={isCreateRoomModalOpen} closeModal={closeCreateRoomModal} />
        <EnterRoomModal isModalOpen={isEnterRoomModalOpen} closeModal={closeEnterRoomModal} />
      </S.Layout>
    </>
  );
};

export default Main;
