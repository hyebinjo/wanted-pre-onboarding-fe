import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAccount = { id: idRef.current.value, pw: pwRef.current.value };
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    navigate('/main');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        ref={idRef}
      />
      <input type="password" placeholder="비밀번호" ref={pwRef} />
      <button type="submit">로그인</button>
    </Form>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 350px;
`;
