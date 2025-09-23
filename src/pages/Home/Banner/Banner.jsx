import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <Carousel autoplay={true} interval={2500} infiniteLoop={true}>
        <div>
          <img src={bannerImg1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={bannerImg2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={bannerImg3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;