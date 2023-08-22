import { lazy, Suspense } from "react";
import "../Style/Global.css";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const ContactUs = lazy(() => import("../Components/Contact"));
const Footer = lazy(() => import("../Components/Footer"));

const Contact = () => {
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
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
<ContactUs/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default Contact;
