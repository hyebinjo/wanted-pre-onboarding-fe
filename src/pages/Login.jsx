import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../utils/authentication';
import { setStorage } from '../utils/storage';

const regexpId = /.@.+\../;
const regexpPw =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_))[a-zA-Z\d\W|_]{8,}$/;

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleInputChange = (ref, regexp) => {
    regexp.test(ref.current.value) || !ref.current.value
      ? ref.current.classList.remove('not-valid')
      : ref.current.classList.add('not-valid');
  };

  const handleFormChange = () => {
    regexpId.test(idRef.current.value) && regexpPw.test(pwRef.current.value)
      ? btnRef.current.classList.add('valid')
      : btnRef.current.classList.remove('valid');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAccount = { id: idRef.current.value, pw: pwRef.current.value };
    if (login(userAccount.id, userAccount.pw)) {
      setStorage('userAccount', userAccount);
      navigate('/main');
    } else alert('아이디와 비밀번호를 확인하세요');
  };

  return (
    <Main>
      <LoginSection>
        <Img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="logo"
        />
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
      </LoginSection>
    </Main>
  );
};

export default Login;

const Main = styled.main`
  height: 100vh;
  padding-top: 32px;
  background-color: #fafafa;
`;

const LoginSection = styled.section`
  margin: auto;
  padding: 46px 0 30px;
  width: 350px;
  background-color: #ffffff;
  border: 1px solid rgb(219, 219, 219);
`;

const Img = styled.img`
  display: block;
  margin: 0 auto 24px;
  width: 175px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 268px;
`;

const Input = styled.input`
  background-color: #efefef;
  margin: 0 auto 6px;
  width: 100%;
  height: 38px;
  padding: 9px 8px 7px;
  border-radius: 3px;
  border: 1px solid rgb(219, 219, 219);
  background-color: #fafafa;
  font-size: 12px;
  &.not-valid {
    border: 1px solid red;
  }
`;

const Button = styled.button`
  margin: 8px auto;
  width: 100%;
  height: 28px;
  border-radius: 4px;
  color: white;
  background-color: rgb(0, 149, 246);
  font-size: 14px;
  font-weight: 600;
  opacity: 0.3;
  &.valid {
    cursor: pointer;
    opacity: 1;
  }
`;
