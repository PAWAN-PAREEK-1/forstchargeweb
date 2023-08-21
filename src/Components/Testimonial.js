import React, { useState } from "react";
import "../Style/Testimonial.css";
// import tesiImg1 from "../Assets/img/testi1.svg";
import testimonial from "../Assets/img/testi.svg";
import rightarrow from "../Assets/img/rightarrow.svg";
import leftarrow from "../Assets/img/leftarrow.svg";
import circel1 from "../Assets/img/cir1.png";
import circel2 from "../Assets/img/cir2.png";
import circel3 from "../Assets/img/cir3.png";
// import Testi from "../Components/Testi";

const testData = [
  {
    content:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    name: "Gustavo Baptista",
    role: "Client Of Company",
  },
  {
    content:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    name: "Gustavosdsd Baptista",
    role: "Clientdsds Of Company",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testData.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="testimonial">
        <div className="testi-hero">
          <div className="testi-left">
            <div className="text">
              <h1 id="one">0</h1>
              <h1>1</h1>
            </div>
          </div>
          <div className="testi-right">
            <div className="testi">
              <p>{testData[currentIndex].content}</p>
              <div className="testi-name">
                <img src={testimonial} alt="" />
                <div className="testi-client">
                  <h4>{testData[currentIndex].name}</h4>
                  <h6>{testData[currentIndex].role}</h6>
                </div>
              </div>
            </div>

            <div className="testi-detail">
              <img onClick={handleRightArrowClick} src={rightarrow} alt="" />

              <img onClick={handleLeftArrowClick} src={leftarrow} alt="" />
            </div>
          </div>
        </div>


        <div className="testi-hero">

          <div className="testi-right">
            <div className="testi1">


              <div className="per-circel">


            <div className="circel-de"><img src={circel1} alt="" />
            <h2>Home Station</h2></div>
            <div className="circel-de"><img src={circel2} alt="" />
            <h2>Commercial System</h2></div>
            <div className="circel-de"><img src={circel3} alt="" />
            <h2>Public Charger</h2></div>
             </div>



            </div>
          </div>
          <div className="testi-left">
            <div className="text text2">
              <h1 id="one">0</h1>
              <h1>2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
