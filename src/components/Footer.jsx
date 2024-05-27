import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterStyle";

export default function Footer() {
  return (
    <FooterContainer>
      {/* 회사 소개 */}
      <div className="brand-info-wrap">
        <div className="company-content-wrap">
          <p>법인명(상호) : (주)슈퍼닭제이에스글로벌 대표자 : 박준성 전화 : 1234-1234 개인정보관리책임자 : 박준성</p>
          <p>사업자등록번호 : 111-2222-1515315 통신판매업신고 : 2024-서울 압구정-02-8281호</p>
          <p>주소 : 서울 특별시 강남구 강남대로 123(신논현동) 슈퍼익스프레스 유엑스글로벌</p>
          <br />
          <p>입점/제휴 문의 : junecoding@naver.com</p>
        </div>
      </div>

      {/* 고객센터 */}
      <div className="customer-service-wrap">
        <h2>고객센터</h2>
        <h1>1111-2222</h1>
        <br />
        <p>평일 : 09:30 ~ 17:30</p>
        <p>점심시간 : 오후 01:00 ~ 02:00</p>
        <p>주말 및 공휴일은 휴무입니다.</p>
      </div>

      {/* 커뮤니티 */}
      <div className="comunity-wrap">
        <ul className="comunity-1">
          <li>
            <Link to="/">공지사항</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/">상품Q&A</Link>
          </li>
          <li>
            <Link to="/">리뷰</Link>
          </li>
        </ul>

        <ul className="comunity-2">
          <li>
            <Link to="/join">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
