# OPGG Frontend Test

## 사용 기술

next.js, typescript, styled-component, recoil

## 디자인 패턴

## 실행

```
npm run dev
```

## **상세 요구사항**

[ ] 검색시 검색한 소환사 정보가 노출되어야 하며, 검색창에는 op.gg와 같이 최근 검색 리스트가 노출되어야 합니다.
[ ] 매치 리스트 타입에 따라 필터링 되어야 합니다.
[ ] 아이템에 mouse hover시 툴팁을 노출합니다.
[ ] 과제에서 매치 더보기 기능은 제외합니다.
[ ] 탭 선택에 따라 프리시즌과 7일간 랭크 승률을 보여주세요. (정렬기준: 플레이 게임 수)
[ ] 25.9 / 15.8 / 14.1 == kills / assists / deaths
[ ] KDA 공식 : kills + assists / deaths
[ ] 색상표시기준

- KDA
  - 3.00:1 >= #2daf7f
  - 4.00:1 >= #1f8ecd
  - 5.00:1 >= #e19205
- 승률
  - 60% >= #c6443e
- 평점
  - 6.0 >= #e19205
