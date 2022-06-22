import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommentsForm from './CommentsForm';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BiBookmark } from 'react-icons/bi';

const Feed = ({ data }) => {
  const [imgState, setImgState] = useState({ imageIsReady: false });

  useEffect(() => {
    const img = new Image();
    img.src = data.image_src;

    img.onload = () => {
      setImgState({ imageIsReady: true });
    };
  }, []);

  return (
    imgState.imageIsReady && (
      <Article>
        <Header>
          <Profile>
            <ProfileImage></ProfileImage>
            <H1>{data.name}</H1>
          </Profile>
          <FiMoreHorizontal />
        </Header>
        <main>
          <Img src={data.image_src} alt="image" />
          <IconsContainer>
            <Icons>
              <FaRegHeart />
              <TbMessageCircle2 />
              <IoPaperPlaneOutline />
            </Icons>
            <BiBookmark />
          </IconsContainer>
          <Span>좋아요 {data.count}개</Span>
        </main>
        <CommentsForm data={data.comments} />
      </Article>
    )
  );
};

export default Feed;

const Article = styled.article`
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgb(219, 219, 219);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

const Header = styled.header`
  height: 50px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: lightgrey;
  border-radius: 50%;
`;

const H1 = styled.h1`
  margin-left: 12px;
  font-size: 14px;
`;

const Img = styled.img`
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding: 0 12px;
  font-size: 28px;
`;

const Icons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  display: inline-block;
  padding: 0 12px;
  margin-bottom: 8px;
`;
