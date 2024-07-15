import { UserInfo } from '../../apis/user';

import * as S from './SelectRole.styles';

interface SelectRoleProp {
  name: UserInfo;
  navigator: string;
  driver: string;
  handleSelect: (role: 'driver' | 'navigator', event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectRole = ({ driver, navigator, name, handleSelect }: SelectRoleProp) => {
  return (
    <S.SelectContainer>
      <S.SelectBox>
        <S.SelectLabel htmlFor="navigator" name="navigator">
          내비게이터
        </S.SelectLabel>
        <S.Select value={navigator} id="navigator" onChange={(event) => handleSelect('navigator', event)}>
          <option defaultValue="">이름을 선택해주세요</option>
          <option value={name.nameA}>{name.nameA}</option>
          <option value={name.nameB}>{name.nameB}</option>
        </S.Select>
      </S.SelectBox>
      <S.SelectBox>
        <S.SelectLabel htmlFor="driver" name="driver">
          드라이버
        </S.SelectLabel>
        <S.Select id="driver" value={driver} onChange={(event) => handleSelect('driver', event)}>
          <option defaultValue="">이름을 선택해주세요</option>
          <option value={name.nameA}>{name.nameA}</option>
          <option value={name.nameB}>{name.nameB}</option>
        </S.Select>
      </S.SelectBox>
    </S.SelectContainer>
  );
};

export default SelectRole;
