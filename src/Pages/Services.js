import { lazy, Suspense } from "react";
import "../Style/Global.css";

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


     <Blog/>


        <Contact/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default Services;
