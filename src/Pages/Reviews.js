import { lazy, Suspense } from "react";
import "../Style/Global.css";
// import video from "../Assets/img/video.svg";

const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Testimonial = lazy(() => import("../Components/Testimonial"));
const Contact = lazy(() => import("../Components/Contact"));
const Footer = lazy(() => import("../Components/Footer"));

const Reviews = () => {
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
              <h1>Reviews</h1>
            </div>
          </div>
        </div>




<Testimonial/>

<video autoPlay muted>
  {/* <source src={video} type="video/mp4" /> */}
</video>
        <Contact/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default Reviews;
