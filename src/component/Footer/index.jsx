import React from "react";
import "./Footer.scss";
import logo from "./img/Лого.svg";
import { Link, NavLink } from "react-router-dom";
import sotset from './img/Социалки.svg'
import visa from './img/visa-mastercard 1.svg'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="logo-text">
              <p>© Все права защищены</p>
              <p>Политика конфиденциальности</p>
              <p>Публичная оферта</p>
            </div>
          </div>
          <div className="nav-bar">
            <NavLink to={"/"}>Главная</NavLink>
            <div className="shop">
            <NavLink to={"/shop"}>Магазин</NavLink>
            <div className="menu">
                <Link>Пальто</Link>
                <Link>Свитшоты</Link>
                <Link>Кардиганы</Link>
                <Link>Толстовки</Link>
            </div>
            </div>
            <NavLink to={"/brend"}>О бренде</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
          </div>
          <div className="email">
            <div className="email-tel">
                <p>+7 (495) 823-54-12</p>
                <p>hello@womazing.com</p>
            </div>
            <img src={sotset} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
