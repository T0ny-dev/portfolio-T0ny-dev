import React from "react";
import ImgReact from "../../assets/react.svg"
import ImgSass from "../../assets/sass.svg"
import ImgJs from "../../assets/js.svg"
import ImgBoostrap from "../../assets/boostrap.svg"
import ImgSpline from "../../assets/spline.svg"
import "./brand.css"

function Brand() {
  return (
    <div className="brands">
      <div className="brands__title">
        <h2>Tecnologías con que disfruto trabajar</h2>
      </div>
      <div className="brands__logos">
          <img src={ImgReact} alt="react logo" />
          <img src={ImgSass} alt="react logo" />
          <img src={ImgJs} alt="react logo" />
          <img src={ImgBoostrap} alt="react logo" />
          <img src={ImgSpline} alt="react logo" />
      </div>
    </div>
  )
}

export default Brand;