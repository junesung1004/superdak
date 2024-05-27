import React from "react";
import { BannerContainer } from "./BannerStyle";

export default function Banner() {
  return (
    <BannerContainer>
      <div className="logo-wrap">
        <img src="/logo.png" alt="브랜드 로고" />
      </div>
      <div className="text-wrap">
        <p>슈퍼닭은 "100% 국내산" 닭가슴살 만을 사용합니다.</p>
      </div>
    </BannerContainer>
  );
}
