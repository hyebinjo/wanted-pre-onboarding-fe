# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

## Quick Overview

```
npm install

npm start
```

\*\* React를 구동할 수 있는 기본적인 환경이 필요합니다.

# :: 과제 구현사항

---

## 폴더구조
```
📦wanted-pre-onboarding-fe
 ┣ 📂.vscode
 ┣ 📂public
 ┃ ┣ 📂data
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂pages
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ```
* ✅ 로그인 아이디 : `wanted@gmail.com`
* ✅ 로그인 비밀번호 : `Wanted1!`

## Assignment 1 - `Login`

- useRef를 사용하여 렌더링 최적화 고려
- Login Form에 `onSubmit` 이벤트를 설정하여 Local Storage에 id와 password가 저장되도록 구현
- `useNavigate` hook을 하용하여 로그인시 Main페이지로 이동

## Assignment2 - `GNB`

- GNB 컴포넌트를 만들고, Main 페이지에 import
- GNB에 `position: sticky;`로 적용하여 스크롤시 항상 상단에 고정
- 반응형 CSS 적용

## Assignment3 - `Validation`

- ID input 요소와, Password input요소에 각각 `onChange`이벤트를 설정하여 유효성검사 함수 실행
- Input 요소에 `'not-valid'`클래스명으로 border 색상을 변경하여 validation상태 표시
- Button 요소에 `'valid'`클래스명으로 색상을 변경하여 validation상태 표시

## Assignment4 - `Routing`

- App.js에서 라우팅 설정
- 첫페이지에서 localStorage에 userAccount 정보가 있으면 바로 Main 페이지로 이동하도록 구현 (Navigate 컴포넌트 이용)
- 로그아웃시 localSotrage에 저장된 정보를 지우고 Login 페이지로 이동
- Main 페이지에서, localStorage에 저장된 userAccount정보가 없으면 다시 Login페이지로 이동

## Assignment5 - `Feeds`

- Feeds 컴포넌트를 Main 페이지에 import (반응형)
- Feeds 컴포넌트에서 fetch함수를 사용하여 data/data.json 요청
- Feed 컴포넌트에서
  ```js
  img.onload = () => {
      setImgState({ imageIsReady: true });
    };
  ```
  함수로 이미지가 로드되면 imgState를 변경하고,
  
  ```js
  return (
    imgState.imageIsReady && ( ....
  ```
  으로 이미지가 모두 로딩된 후에 컴포넌트가 렌더링되도록 구현
- CommentsForm 컴포넌트 구현 (댓글추가기능)


# :: About me

---
