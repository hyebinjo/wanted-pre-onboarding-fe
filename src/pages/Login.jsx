import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../utils/authentication';

const regexpId = /.@.+\../;
const regexpPw =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_))[a-zA-Z\d\W|_]{8,}$/;

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleInputChange = (ref, regexp) => {
    regexp.test(ref.current.value)
      ? ref.current.classList.remove('not-valid')
      : ref.current.classList.add('not-valid');
  };

  const handleFormChange = () => {
    regexpId.test(idRef.current.value) && regexpPw.test(pwRef.current.value)
      ? btnRef.current.classList.remove('not-valid')
      : btnRef.current.classList.add('not-valid');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAccount = { id: idRef.current.value, pw: pwRef.current.value };
    if (login(userAccount.id, userAccount.pw)) {
      localStorage.setItem('userAccount', JSON.stringify(userAccount));
      navigate('/main');
    } else alert('아이디와 비밀번호를 확인하세요');
  };

  return (
    <Form onSubmit={handleSubmit} onChange={handleFormChange}>
      <Input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        ref={idRef}
        onChange={() => handleInputChange(idRef, regexpId)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        ref={pwRef}
        onChange={() => handleInputChange(pwRef, regexpPw)}
      />
      <Button type="submit" ref={btnRef}>
        로그인
      </Button>
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

const Input = styled.input`
  background-color: #efefef;
  margin: 8px;
  &.not-valid {
    border: 1px solid red;
  }
`;

const Button = styled.button`
  color: white;
  background-color: blue;
  &.not-valid {
    opacity: 0.5;
  }
`;
