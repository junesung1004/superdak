import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TopDownButtonContainer } from "./TopDownButtonStyle";

export default function TopDownButton() {
  const [showButton, setShowButton] = useState(false);

  // 페이지 상단으로 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 페이지 하단으로 이동
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <TopDownButtonContainer>
          <div className="logo-wrap" onClick={scrollToTop}>
            <FaArrowUp />
            <span>TOP</span>
          </div>
          <div className="logo-wrap" onClick={scrollToBottom}>
            <span>DOWN</span>
            <FaArrowDown />
          </div>
        </TopDownButtonContainer>
      )}
    </>
  );
}
