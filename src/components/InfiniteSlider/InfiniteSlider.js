import React from "react";
import "./infiniteSlider.css";

import team1 from "../../images/team/team1.jpg";
import team2 from "../../images/team/team2.jpg";
import team3 from "../../images/team/team3.jpg";
import team4 from "../../images/team/team4.jpg";

const InfiniteSlider = () => {
  return (
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <br />
          <h4>
            <b>Michael</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/3785094/pexels-photo-3785094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div class="slide">
          <h4>
            <b>Martha</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Andrew</b>
          </h4>
          <p>
            <small>SEO Expert</small>
          </p>
          <img className="infiniteImg" src={team1} alt="" />
        </div>
        <div class="slide">
          <h4>
            <b>Peter</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img className="infiniteImg" src={team2} alt="" />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Emma</b>
          </h4>
          <p>
            <small>UI Designer</small>
          </p>
          <img className="infiniteImg" src={team3} alt="" />
        </div>
        <div class="slide">
          <h4>
            <b>Alex</b>
          </h4>
          <p>
            <small>Project Manager</small>
          </p>
          <img className="infiniteImg" src={team4} alt="" />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Florence</b>
          </h4>
          <p>
            <small>Digital Marketer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/8133884/pexels-photo-8133884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div class="slide">
          <br />
          <h4>
            <b>Michael</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/3785094/pexels-photo-3785094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div class="slide">
          <h4>
            <b>Martha</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Andrew</b>
          </h4>
          <p>
            <small>SEO Expert</small>
          </p>
          <img className="infiniteImg" src={team1} alt="" />
        </div>
        <div class="slide">
          <h4>
            <b>Peter</b>
          </h4>
          <p>
            <small>Web Developer</small>
          </p>
          <img className="infiniteImg" src={team2} alt="" />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Emma</b>
          </h4>
          <p>
            <small>UI Designer</small>
          </p>
          <img className="infiniteImg" src={team3} alt="" />
        </div>
        <div class="slide">
          <h4>
            <b>Alex</b>
          </h4>
          <p>
            <small>Project Manager</small>
          </p>
          <img className="infiniteImg" src={team4} alt="" />
        </div>
        <div class="slide">
          <br />
          <br />
          <h4>
            <b>Florence</b>
          </h4>
          <p>
            <small>Digital Marketer</small>
          </p>
          <img
            className="infiniteImg"
            src="https://images.pexels.com/photos/8133884/pexels-photo-8133884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
