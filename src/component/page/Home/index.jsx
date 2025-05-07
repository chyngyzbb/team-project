import React from "react";
// import styles from "./home.module.scss";
import bg from "./img/Rectangle 1.png";
import btn from "./img/Frame 9.svg";
import slide from "./img/Навигация слайдера.svg";
import img1 from "./img/Фото главное.png";
import img2 from "./img/Фото вторичное.png";
import img3 from "./img/Фото третьестепенное.png";
import "./home.scss";
import frame1 from "./img/Frame 16.svg";
import vector2 from "./img/Vector 2.svg";
import vector1 from "./img/Vector 1.svg";
import frame2 from "./img/Frame 16 (1).svg";
import frame3 from "./img/Frame 16 (2).svg";
import slide2 from "./img/Навигация слайдера (1).svg";
import adam from "./img/adam-winger-fI-TKWjKYls-unsplash 1.png";

const Home = () => {
  return (
    <div className="root">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="hero">
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
          <div className="hero-two"></div>
          <div className="hero-three">
            <h1>Что для нас важно</h1>
            <div className="three-contents">
              <div className="three-content">
                <img className="frames" src={frame1} alt="" />
                <h4>Качество</h4>
                <p>
                  Наши профессионалы работают на лучшем оборудовании для пошива
                  одежды беспрецедентного качества
                </p>
              </div>
              <div className="three-content">
                <img className="frames" src={frame2} alt="" />
                <h4>Скорость</h4>
                <p>
                  Благодаря отлаженной системе в Womazing мы можем отшивать до
                  20-ти единиц продукции в наших собственных цехах
                </p>
              </div>
              <div className="three-content">
                <img className="frames" src={frame3} alt="" />
                <h4>Ответственность</h4>
                <p>
                  Мы заботимся о людях и планете. Безотходное производство и
                  комфортные условия труда - все это Womazingодежды
                  беспрецедентного качества
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
