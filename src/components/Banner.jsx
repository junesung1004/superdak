// Banner.js
import React, { useEffect, useRef, useState } from "react";
import { BannerContainer } from "./BannerStyle";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.6, // 30%가 보일 때 트리거
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <BannerContainer ref={bannerRef} className={isVisible ? "visible" : ""}>
      <div className="logo-wrap">
        <img src="/logo.png" alt="브랜드 로고" />
      </div>
      <div className="text-wrap">
        <p>슈퍼닭은 "100% 국내산" 닭가슴살 만을 사용합니다.</p>
      </div>
    </BannerContainer>
  );
}
