# OPGG Frontend Test

## 사용 기술

next.js, typescript, styled-component, recoil

## 실행

```
npm run dev
```

## 파일 구조

```
src
┣ assets
┃ ┗ icons : 아이콘 컴포넌트
┣ components
┃ ┣ common : 공용 컴포넌트
┃ ┣ home : "/" 경로의 컴포넌트
┃ ┣ layout : 페이지 templete
┃ ┃ ┣ AppLayout
┃ ┃ ┣ HomeLayout
┃ ┃ ┗ SummonerLayout
┃ ┣ summoner : "/summoner" 경로의 컴포넌트
┃ ┃ ┣ Dashboard
┃ ┃ ┣ Games
┃ ┃ ┣ Leagues
┃ ┃ ┣ Profile
┃ ┃ ┗ Rankings
┣ hooks: custom hooks
┣ lib : 모듈함수
┣ pages
┃ ┣ api
┃ ┃ ┗ api.ts : endpoint
┃ ┣ summoner
┃ ┃ ┗ [summonerName].tsx : 소환사 검색 결과 페이지
┃ ┣ \_app.tsx : 진입점, react의 App.jsx
┃ ┣ \_document.tsx
┃ ┗ index.tsx : 메인페이지
┣ recoil : golbal states
┣ styles : global styles
┣ types : interface
┗ .DS_Store
```
