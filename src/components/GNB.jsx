import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { CgAddR } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { FaRegHeart } from 'react-icons/fa';

const GNB = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userAccount');
    navigate('/login');
  };

  return (
    <Nav>
      <Container>
        <Img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="instargram logo"
        />
        <Input type="text" placeholder="검색" />
        <Icons>
          <MdHome />
          <IoPaperPlaneOutline />
          <CgAddR />
          <ImCompass2 />
          <FaRegHeart />
          <Button onClick={logout}>Logout</Button>
        </Icons>
      </Container>
    </Nav>
  );
};

export default GNB;

const Nav = styled.nav`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(219, 219, 219);
  z-index: 1;
`;

const Container = styled.div`
  width: 975px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media screen and (max-width: 975px) {
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    padding: 0;
  }
`;

const Img = styled.img`
  width: 102px;
  margin-right: 24px;
`;

const Input = styled.input`
  background-color: #efefef;
  width: 268px;
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 278px;
  padding-left: 24px;
  font-size: 24px;
  @media screen and (max-width: 640px) {
    padding-left: 0;
  }
  @media screen and (max-width: 414px) {
    min-width: 0;
    width: 278px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
`;
