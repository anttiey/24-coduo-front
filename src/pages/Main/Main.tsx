import { useState } from 'react';

import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal';

import * as S from './Main.style';

const Main = () => {
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);

  const openCreateRoomModal = () => setIsCreateRoomModalOpen(true);
  const closeCreateRoomModal = () => setIsCreateRoomModalOpen(false);

  return (
    <S.Layout>
      <S.TitleContainer>
        <S.Title>
          코딩해<span>듀오</span>
        </S.Title>
        <S.SubTitle>협업의 힘을 경험하세요. 코딩해듀오가 도와드립니다!</S.SubTitle>
      </S.TitleContainer>
      <S.Button onClick={openCreateRoomModal}>방 만들기</S.Button>
      <CreateRoomModal isModalOpen={isCreateRoomModalOpen} closeModal={closeCreateRoomModal} />
    </S.Layout>
  );
};

export default Main;
