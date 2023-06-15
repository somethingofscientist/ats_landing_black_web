import laptop from "../../Images/MacBook Pro 16.png";
import screen from "../../Images/laptop.svg";
import style from "./Curve.module.css";
import React, { useState } from "react";
import videoStyle from "./Video.module.css";
// import video1 from "../../Images/video/video_new.mp4";
import video1 from "../../new_images/video_new.mp4";
import video2 from "../../Images/video/three.mp4";
import phone from "../../Images/phone_new.png";

function Curve(props) {
  // <img className={style.phone_base} src={phone} alt="laptop" />

  return (
    <>
      <div className={style.curve}>
        <div className={style.white_curve}>
          <div className={style.container}>
            <img className={style.laptop_base} src={laptop} alt="laptop" />

            <div className={style.inner_container}>
              {/* video starts */}


              <div
                className={videoStyle.video_container}
                onClick={() => props.setShowVideo(!props.showVideo)}
              >
                <video id="video_laptop" src={video1} loop muted />

                <button
                  className={videoStyle.close_button}
                  onClick={() => props.setShowVideo(!props.showVideo)}
                ></button>
              </div>


              {/* video ends */}
            </div>
          </div>

          <div className={style.mobileContainer}>
            <img className={style.phone_base} src={phone} alt="phone" />

            {props.showVideo ? (
              <div
                className={videoStyle.mobile_video_container}
                onClick={() => props.setShowVideo(!props.showVideo)}
              >
                <video src={video2} autoPlay loop muted />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Curve;
