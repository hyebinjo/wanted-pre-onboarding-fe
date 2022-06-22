import React from 'react';
import styled from 'styled-components';
import GNB from '../components/GNB';
import Feeds from '../components/Feeds';

const Main = () => {
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
