import React from "react";
import { BannerContainer } from "./BannerStyle";

export default function Banner1() {
  return (
    <BannerContainer>
      <div className="img-wrap">
        <img src="/banner-1.jpg" alt="배너" />
      </div>
    </BannerContainer>
  );
}
