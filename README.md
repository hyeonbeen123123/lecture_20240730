# 오늘 배운내용
1. 원본소스에서 "인천상륙작전" 처럼 내것으로 만드는 전략
- 서버 코딩 시작
- 몽고DB 생성 및 연결
- 회원가입 알고리즘
- 신규회원을 MongoDB Altas 클라우드에 저장
- 꺼내보고, 확인하는 방법
- 메일계정으로 로그인
- 비밀번호 체크 초입 (client 처리로 넘김)

# 다음 시간에 다룰 내용
1. client 처리
- React 다루고
- 서버에 /api/email을 호출해서, 해당 사용자의 
{
  _id: new ObjectId('669f68135ec84f354b578ad4'),
  name: '슈퍼맨',
  email: 'superman1@hotmail.com',
  password: '1234',
  profile_pic: '',
  createdAt: 2024-07-23T08:21:39.143Z,
  updatedAt: 2024-07-23T08:21:39.143Z,
  __v: 0
}
이 데이타를 서버로 부터 받아, 클라이언트에서 처리하는 알고리즘
- 사용자ID를 저장 (쿠키에 저장)
- 비밀번호 체크를 서버에 요청 (토큰으로 보내자)
- 결국, 로그인을 성공시키자.

# 0730 수업내용
1. 카카오톡 클라이언트 만들기위한 준비사항
 -NPX 설치 + 실행
2. react 설치 
  - npx create react app
  - cd 폴더명 / npm run start
3. tailwindcss 설치
  - npm install -D tailwindcss 
  - npmtailwindcss init 
  - tailwind.config.js -> content 추가
  - src/index.css -> 맨 위 코드 추가
4. React Router 설치
  - npm install react-router-dom
5. VS code 확장팩 설치
  - tailwind Css lntellisense
  - ES7 React/Redux/~~~~
  - 
