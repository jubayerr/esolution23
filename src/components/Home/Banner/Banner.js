import React from "react";
import "./Banner.css";
import BannerImg from "../../../images/banner-image.jpg";
// import ButterflyImg from '../../../images/butterfly.png'
import Typed from "react-typed";
import ParticlesBg from "particles-bg";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <Typed
              className="typedText"
              strings={[
                "We offer modern solutions",
                "for growing your business",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <p className="lead py-2">
              We are team of talented designers <br /> making websites with
              React
            </p>
            <button>See More</button>
          </div>
          <div className="col-md-6">
            <img src={BannerImg} className="img-fluid" alt="Banner" />
            {/* <img src={ButterflyImg} className="img-fluid butterfly" alt="Banner Image" /> */}
          </div>
        </div>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default Banner;
