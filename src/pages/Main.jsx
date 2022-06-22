import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage } from '../utils/storage';
import styled from 'styled-components';
import GNB from '../components/GNB';
import Feeds from '../components/Feeds';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    !getStorage('userAccount') && navigate('../');
  }, []);

  return (
    <MainPage>
      <GNB />
      <Feeds />
    </MainPage>
  );
};

export default Main;

const MainPage = styled.main`
  background-color: #fafafa;
`;
