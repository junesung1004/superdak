import { BannerContainer } from "./Banner3Style";

export default function Banner3() {
  return (
    <BannerContainer>
      <div className="title-wrap">
        <img src="/time.png" alt="시계" />
        <span>지금, 놓치면 후회하는 타임특가</span>
      </div>
      <div className="img-container">
        <div className="img-wrap">
          <img src="/zzal-1.jpg" alt="짤" />
          <p>다시 생각해봐? 곧 할인 끝나!???💓</p>
        </div>
        <div className="img-wrap">
          <img src="/zzal-2.jpg" alt="짤" />
          <p>안사면 오늘 하루종일 생각날거야👀👀</p>
        </div>
      </div>
    </BannerContainer>
  );
}
