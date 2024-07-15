import { Link } from 'react-router-dom';

import { Logo } from '../../assets';

import * as S from './Header.style';

const Header = () => {
  return (
    <S.Layout>
      <Link to="/">
        <img src={Logo} alt="로고" />
      </Link>
    </S.Layout>
  );
};

export default Header;
