import React from "react";
import bg from "./img/Rectangle 1.png";
import "./home.scss";
import NewHome from "../../NewHome";
import ThreeHome from "../../ThreeHome";
import CommandHome from "../../CommandHome";

const Home = () => {
  return (
    <div className="root">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="hero">
          <NewHome />
          <div className="hero-two"></div>
          <ThreeHome />
          <CommandHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
