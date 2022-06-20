import React from 'react';
import styled from 'styled-components';
import GNB from '../components/GNB';

const Main = () => {
  return (
    <MainPage>
      <GNB />
      <h1>메인페이지</h1>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.main`
  background-color: #fafafa;
`;
