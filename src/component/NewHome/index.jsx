import React from "react";
import "./NewHome.scss";
import btn from "./img/Frame 9.svg";
import slide from "./img/Навигация слайдера.svg";
import img1 from "./img/Фото главное.png";
import img2 from "./img/Фото вторичное.png";
import img3 from "./img/Фото третьестепенное.png";

const NewHome = () => {
  return (
    <div className="hero-one">
      <div className="one-desc">
        <h1>
          Новые поступления <br />в этом сезоне
        </h1>
        <p>
          Утонченные сочетания и бархатные <br />
          оттенки - вот то, что вы искали в этом <br />
          сезоне. Время исследовать.
        </p>
        <div className="one-btn">
          <img src={btn} alt="" />
          <button>Открыть магазин</button>
        </div>
        <img className="slide" src={slide} alt="" />
      </div>
      <div className="one-img">
        <img className="img1" src={img1} alt="" />
        <img className="img2" src={img2} alt="" />
        <img className="img3" src={img3} alt="" />
      </div>
    </div>
  );
};

export default NewHome;
