import { lazy, Suspense } from "react";
import "../Style/Global.css";

const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Blog = lazy(() => import("../Components/Blog"));
const FaqsC = lazy(() => import("../Components/Faqs"));
const Footer = lazy(() => import("../Components/Footer"));

const Faqs = () => {
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
              <h1>Faq’S</h1>
            </div>
          </div>
        </div>

<FaqsC/>
     <Blog/>



        <Footer/>
      </div>
    </Suspense>
  );
};

export default Faqs;
