import React from 'react';
import slide2 from "./img/Навигация слайдера (1).svg";
import adam from "./img/adam-winger-fI-TKWjKYls-unsplash 1.png";
import vector2 from "./img/Vector 2.svg";
import vector1 from "./img/Vector 1.svg";

const CommandHome = () => {
    return (
        <div className="hero-four">
        <h3 className="four-h3">Команда мечты Womazing</h3>
        <div className="four">
          <div className="four-img">
            <img src={vector1} alt="" />
            <div className="img-four">
              <img className="adam" src={adam} alt="" />
              <img className="slide2" src={slide2} alt="" />
            </div>
            <img src={vector2} alt="" />
          </div>
          <div className="four-desc">
            <div className="desc">
              <h5 className="four-h5">Для каждой</h5>
              <p className="four-p">
                Каждая девушка уникальна. Однако, мы схожи в миллионе
                мелочей. <br />
                <br />
                Womazing ищет эти мелочи и создает прекрасные вещи, которые
                выгодно подчеркивают достоинства каждой девушки.
              </p>
              <button className="four-btn">Подробнее о бренде</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CommandHome;