import styled from 'styled-components';

interface SelectRoleProp {
  name: string[];
  navigator: string;
  driver: string;
  handleSelect: (role: 'driver' | 'navigator', event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectRole = ({ driver, navigator, name, handleSelect }: SelectRoleProp) => {
  return (
    <>
      <SelectContainer>
        <SelectBox>
          <SelectLabel htmlFor="navigator" name="navigator">
            내비게이터
          </SelectLabel>
          <Select value={navigator} id="navigator" onChange={(event) => handleSelect('navigator', event)}>
            <option value="" selected disabled>
              이름을 선택해주세요
            </option>
            <option value={name[0]}>{name[0]}</option>
            <option value={name[1]}>{name[1]}</option>
          </Select>
        </SelectBox>
        <SelectBox>
          <SelectLabel htmlFor="driver" name="driver">
            드라이버
          </SelectLabel>
          <Select id="driver" value={driver} onChange={(event) => handleSelect('driver', event)}>
            <option value="" selected disabled>
              이름을 선택해주세요
            </option>
            <option value={name[0]}>{name[0]}</option>
            <option value={name[1]}>{name[1]}</option>
          </Select>
        </SelectBox>
      </SelectContainer>
    </>
  );
};

const SelectLabel = styled.label<{ name: string }>`
  color: #0094a0;
  margin-right: ${({ name }) => (name === 'driver' ? '1.7rem' : '0rem')};
`;

const SelectBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
`;

const Select = styled.select`
  width: 30rem;
  height: 4.1875rem;
  border: 1px solid #0094a0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

export default SelectRole;
