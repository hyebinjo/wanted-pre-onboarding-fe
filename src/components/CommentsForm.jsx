import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { VscSmiley } from 'react-icons/vsc';

const CommentsForm = ({ data }) => {
  const [comments, setComments] = useState(data);
  const commentRef = useRef();
  const btnRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    commentRef.current.value &&
      setComments([
        ...comments,
        { user: 'wanted', text: commentRef.current.value },
      ]);
    commentRef.current.value = null;
    btnRef.current.classList.remove('valid');
  };

  const handleInputChange = () => {
    commentRef.current.value
      ? btnRef.current.classList.add('valid')
      : btnRef.current.classList.remove('valid');
  };

  return (
    <>
      <Ul>
        {comments.map((comment, idx) => (
          <Li key={idx}>
            {`${comment.user} `}
            <P>{`${comment.text}`}</P>
          </Li>
        ))}
      </Ul>
      <Form onSubmit={handleSubmit} onChange={handleInputChange}>
        <VscSmiley />
        <Input type="text" placeholder="댓글달기" ref={commentRef} />
        <Button type="submit" ref={btnRef}>
          게시
        </Button>
      </Form>
    </>
  );
};

export default CommentsForm;

const Ul = styled.ul`
  padding: 0 12px;
  margin-bottom: 20px;
`;

const Li = styled.li`
  margin-bottom: 4px;
`;

const P = styled.p`
  display: inline;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  border-top: 1px solid #ebedf0;
  font-size: 28px;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 12px;
`;

const Button = styled.button`
  flex-shrink: 0;
  background: none;
  color: #47afff;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.5;
  &.valid {
    cursor: pointer;
    opacity: 1;
  }
`;
