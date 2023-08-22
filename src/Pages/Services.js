
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "../Style/Global.css";
import "../Style/Services.css";
import service1 from "../Assets/img/s1.svg"
import service2 from "../Assets/img/s2.svg"
import service3 from "../Assets/img/s3.svg"


const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Blog = lazy(() => import("../Components/Blog"));
const Contact = lazy(() => import("../Components/Contact"));
const Footer = lazy(() => import("../Components/Footer"));

const Services = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <div className="hero-all">
          <Navbar />
          <div className="h-head">
            <div className="h-detail">
              <hr />
              <h1>Services</h1>
            </div>
          </div>
        </div>


        <div className="service-page">
              <h2>Where do you want to install charging stations?</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
          <div className="service-main">
            <div className="service-box">
                  <div className="service-img">
                    <img src={service1} alt="" />
                  </div>
                  <div className="serv-detail">
                    <h1>For Residential Locations</h1>
                   <Link to={"/SingleService"}><div className="ser-btn">
                      <h1>Learn more</h1>
                    </div></Link>
                  </div>
            </div>
            <div className="service-box">
                  <div className="service-img">
                    <img src={service2} alt="" />
                  </div>
                  <div className="serv-detail">
                    <h1>For Fleet <br /> Parking </h1>
                   <a href=""> <div className="ser-btn">
                      <h1>Learn more</h1>
                    </div></a>
                  </div>
            </div>
            <div className="service-box">
                  <div className="service-img">
                    <img src={service3} alt="" />
                  </div>
                  <div className="serv-detail">
                    <h1>For Commercial Locations</h1>
                   <a href=""> <div className="ser-btn">
                      <h1>Learn more</h1>
                    </div></a>
                  </div>
            </div>

          </div>

        </div>



     <Blog/>


        <Contact/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default Services;
