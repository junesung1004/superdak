# 슈퍼닭

## 요약

> 바쁜 현대인들을 위한 다이어트 식단 쇼핑몰로, K-다이어트 열풍이 한창일 때, 사용자가 선호하는 음식 카테고리를 기반으로 쉽고 간편하게 다이어트 식단을 선택할 수 있는 웹사이트입니다. PC와 모바일에서 모두 최적화된 반응형 디자인으로 제작되어, 언제 어디서나 누구나 손쉽게 이용할 수 있습니다.

### 제작 이유

프론트엔드 공부를 하며 성장할 수 있는 프로젝트를 고민하던 중, K-다이어트 열풍에 맞춰 운동 방법과 식단 관리 관련 기능을 제공하는 다이어트 식단 구매 웹사이트를 만들기로 결정했습니다. 이 프로젝트는 유저 관리, 관리자 기능, 장바구니, 마이페이지 등 다양한 기능을 구현할 수 있어 폭넓은 개발 경험을 쌓을 수 있을 것 같아서 선택하게 되었습니다.

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

swiper.js 라이브러리를 사용하여 메인 배너가 자동으로 슬라이드되도록 설정했을 경우, 유저가 마우스나 터치로 스와이프를 했을 때 자동 슬라이드가 멈추지 않거나, 너무 빠르게 전환되는 문제가 발생

**해결 방법**:

- `autoplay` 옵션을 사용할 때, 슬라이드가 전환되는 속도나 멈추는 조건을 적절히 설정하여 이 문제를 해결했습니다.

## 느낀 점

- React와 Firebase를 결합하여 프론트엔드와 백엔드의 상호작용을 쉽게 처리할 수 있었습니다. 백엔드 지식이 부족한 상태이지만 Firebase의 실시간 데이터베이스와 인증 기능을 활용하면서, 복잡한 서버 구축 없이도 실시간 데이터 처리와 사용자 인증 기능을 빠르게 구현할 수 있다는 점이 매우 유용하다고 느꼈습니다.
- Firebase Authentication을 활용하여 소셜 로그인(구글, 페이스북 등), 이메일 로그인, 비밀번호 관리 등 다양한 인증 방법을 손쉽게 구현할 수 있었습니다. 특히, 서버 사이드 코드를 작성하지 않고도 간단하게 로그인/회원가입 시스템을 구축할 수 있는 방법을 학습했습니다다.
- Swiper.js 라이브러리를 활용하여 다양한 슬라이드 애니메이션을 손쉽게 구현하고, 사용자에게 직관적이고 매력적인 배너 및 이미지 슬라이드를 제공할 수 있는 방법을 학습했습니다.

## 어려웠던 점

- 프론트교육을 받고 프로젝트를 만들 때 백엔드 파트까지 풀스택으로 만들어보자고 결심한 후 백엔드 지식이 부족했던 저는 firebase라는 기능을 알게 되었지만, firebase 공식 문서를 접하면서 초반에는 이해가 되는 부분이 많이 없어서 이점이 어려웠습니다. 공식 문서를 보고 어려운점은 구글 및 프롬프트 엔지니어 검색 서칭으로 검색을 하면서 문제를 해결해 나갔습니다.
- 이미지 파일 자체를 데이터베이스에 올릴 순 있지만 이는 용량이 커지면 커질수록 데이터베이스와 요청되는 기능이 점점 늦어지는걸 알아서 어떻게 관리를 해야 되는지 배운적이 없어서 이를 어떻게 처리하는 과정에서 많은 어려움을 겪었습니다.

## 프로젝트 이미지

| ![스플래쉬 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/splash.png)      | ![첫 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/main.png)            |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![카테고리 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/filter.png)      | ![코치마크 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/cochimark.png) |
| ----------------------------------------------------------------------------------------------------------      | --------------------------------------------------------------------------------------------------            |
| ![음식 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/menuitem.png) | ![음식점 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/shop.png) |
| ----------------------------------------------------------------------------------------------------------      | --------------------------------------------------------------------------------------------------            |
| ![음식 선택택 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/mypage.png)   |
