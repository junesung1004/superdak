# 슈퍼닭

## 요약

> 바쁜 현대인들을 위한 다이어트 식단 쇼핑몰로, K-다이어트 열풍이 한창일 때, 사용자가 선호하는 음식 카테고리를 기반으로 쉽고 간편하게 다이어트 식단을 선택할 수 있는 웹사이트입니다. PC와 모바일에서 모두 최적화된 반응형 디자인으로 제작되어, 언제 어디서나 누구나 손쉽게 이용할 수 있습니다.

### 제작 이유

- 프론트엔드 공부를 하며 성장할 수 있는 프로젝트를 고민하던 중, K-다이어트 열풍에 맞춰 운동 방법과 식단 관리 관련 기능을 제공하는 다이어트 식단 구매 웹사이트를 만들기로 결정했습니다. 이 프로젝트는 유저 관리, 관리자 기능, 장바구니, 마이페이지 등 다양한 기능을 구현할 수 있어 폭넓은 개발 경험을 쌓을 수 있을 것 같아서 선택하게 되었습니다.

## 기능 소개

- 비로그인 / 로그인으로 서비스를 이용할 수 있게 구현
- 비로그인 기능으로는 해당 제품을 선택하여 디테일 페이지에서 확인 할 수 있고 검색을 하여 서비스를 이용 가능하게 구현
- 해당 상품을 주문 혹은 장바구니에 등록하려면 유저로 로그인을 해야지만 가능하게 구현
- 해당 상품을 장바구니에 등록 후 구매할 수 있거나 바로 구매하게 했으며 구매한 상품은 마이페이지에서 확인 가능하며, 해당 상품을 받고 하자가 있을 시 마이페이지에서 구매 취소를 누르면 해당 상품 구매가 취소가 되게 구현현
- 관리자가 상품을 등록할 때 데이터베이스에 수량을 적용하여 업데이트 하는데 구매자는 데이터베이스에 등록된 상품 갯수 이상을 구매할 수 없게 구현
- 백엔드 로직은 Firebase-Database, Firebase-Authentication, Firebase-Stroage를 사용하여 백엔드 환경을 구축

## 기술 스택 (Skill)

**Language**

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <br />
</div>
<br />

**Client**

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <br />
  <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>
<br />

**Database**

<div>
  <img src="https://img.shields.io/badge/firebase-339933?style=for-the-badge&logo=firebase.js&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-database-213s12?style=for-the-badge&logo=firebase-database&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-authentication-sad442?style=for-the-badge&logo=firebase-authentication&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-storage-ff22dd?style=for-the-badge&logo=firebase-storage&logoColor=white">
  <br />
</div>
<br />

**UI**

<div>
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <br />
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white">
</div>
<br />

**Etc**

<div>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/netlify-4A154B?style=for-the-badge&logo=netlify&logoColor=black">
</div>

## 문제해결

**문제.1**

카카오 지도 api 의 내용이 담긴 정보를 kakao 라는 변수에 할당하여 카카오 지도 api 공식문서를 토대로 코드를 작성하였으나 kakao is not defiend 라는 에러 발생

**해결 방법**:

- `defer` 카카오 지도 api 스크립트를 async로 비동기로 처리했으나 완료가 되지 못한 상황에서 실행이 되어 마찬가지로 kakao is not defiend 라는 에러 발생 그리하여 defer라는 속성으로 같은 비동기 속성이지만 완전히 완료되면 실행하라는 차이점을 깨닫고 onload라는 메서드를 사용하여 카카오 지도 api가 담긴 kakao 객체를 사용할 수 있게 되었습니다.

**문제.2**

음식 이미지를 데이터베이스에 저장이 되어야 하는데 mongoDB 자체에는 Storage라는 기능이 따로 없어 이미지 파일을 저장할 곳을 찾지 못하는 문제가 발생

**해결 방법**

- `GridFS` GridFS는 MongoDB에서 큰 파일(16MB 이상)을 여러 조각으로 나누어 저장하고, 이를 효율적으로 관리하고 복원할 수 있는 파일 저장할 수 있는 기능이 있어서 이 방법을 택했고, 저장한 경로의 주소를 추출하는 방식으로 이를 해결할 수 있었습니다.

## 느낀 점

- Next.js 프레임워크의 SSR(Server-Side Rendering)을 활용함으로써 초기 로딩 속도가 향상되고, 검색엔진 최적화(SEO)에도 각각 페이지 별 동적으로 SEO의 이점을 가질 수 있는 점을 배웠습니다.
- 프로젝트에서 필요한 부분에는 CSR을 적용하고, 다른 부분에는 SSR을 적용하는 전략을 사용하여, 페이지 로딩 시간과 SEO를 최적화했습니다. 이 방식은 성능과 사용자 경험을 동시에 고려할 수 있게 해주었습니다.
- 카카오 지도 API를 사용할 때 비동기 처리에 대해 깊이 이해할 수 있었습니다. defer와 onload 메서드를 통해 스크립트 로딩 순서와 실행 시점을 조절하는 방법을 익히며, 비동기 처리가 실제 개발에서 어떻게 중요한지 체감할 수 있었습니다.
- <img> 태그를 활용하여 이미지를 설정했었는데, 데이터베이스로부터 불러오고 이러한 과정에서 어떻게하면 조금 더 빨리 불러올 수 없을까? 하는 도중 NEXT/IMAGE 컴포넌트를 사용하면 자동으로 최적화 해주고 각 상황에 맞게 이미지 사이즈를 조절해주어 이러한 과정을 통해 이미지 불러오는 로딩속도를 1~2초 단축할 수 있었습니다.

## 어려웠던 점

- 처음 Next.js 강의를 page Router 기반으로 학습을 했었는데 규모가 커질수록 폴더구조가 지저분해지는 단점을 깨달아서 app Router 기반으로 설정 후 초기 환경설정을 갖추는점에서 어려움을 겪었습니다.
- 한 프로젝트에서 client 폴더, server(api) 폴더관리를 어떻게 적용하면 좋을지에 대해서도 고민하고 적용하는점에서 많은 어려움을 겪었습니다.

## 프로젝트 이미지

| ![스플래쉬 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/splash.png)      | ![첫 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/main.png)            |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![카테고리 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/filter.png)      | ![코치마크 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/cochimark.png) |
| ----------------------------------------------------------------------------------------------------------      | --------------------------------------------------------------------------------------------------            |
| ![음식 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/menuitem.png) | ![음식점 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/shop.png) |
| ----------------------------------------------------------------------------------------------------------      | --------------------------------------------------------------------------------------------------            |
| ![음식 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/mypage.png)   |
