import { lazy, Suspense } from "react";
import "../Style/Global.css";
import "../Style/Services.css";
import service5 from "../Assets/img/s5.svg"
import dot from "../Assets/img/dot.svg"


const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Blog = lazy(() => import("../Components/Blog"));
const Contact = lazy(() => import("../Components/Contact"));
const Footer = lazy(() => import("../Components/Footer"));

const SingleService = () => {
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


        <div className="service-page ser-page">
              <h2>Where do you want to install charging stations?</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
          <div className="service-main-single">

            <div className="single-img">
                <img src={service5} alt="" />

            </div>

            <div className="single-text">
          <h1>For Commercial Locations</h1>
          <div className="single-para">
            <h3><img src={dot} alt="" />Business</h3>
            <p>Access to charging facilities have currently become a necessity for several of your guests, visitors, and staff. it is a new commonplace for each business.</p>

          </div>
          <div className="single-para">
            <h3><img src={dot} alt="" />Retail and hospitality</h3>
            <p>By inserting charging stations on-site, you provide an area to charge their tummy as well as their cars.</p>

          </div>
          <div className="single-para">
            <h3><img src={dot} alt="" />Workplaces</h3>
            <p>No doubt your office is sustainable and innovative. But what about your parking lot? Placing charging stations on-site makes you a lifesaver for every contributor to a greener future.</p>

          </div>
          <div className="single-para">
            <h3><img src={dot} alt="" />Parking lots</h3>
            <p>Electric vehicle drivers need to have access to charging stations. We’re here to help you create a new revenue stream by setting fees on your charging points</p>

          </div>
          <div className="single-para">
            <h3><img src={dot} alt="" />Smart cities</h3>
            <p>Local governments play a crucial role in the mass adoption of electric cars. we’re helping cities expand their charging infrastructure from smart cities to small towns. Are you next?</p>

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

export default SingleService;












////MAIN SERVICES PAGE



// import { lazy, Suspense } from "react";
// import "../Style/Global.css";
// import "../Style/Services.css";
// import service1 from "../Assets/img/s1.svg"
// import service2 from "../Assets/img/s2.svg"
// import service3 from "../Assets/img/s3.svg"

// const Navbar = lazy(() => import("../Components/Navbar"));
// const Loading = lazy(() => import("../Components/Loading"));
// const Blog = lazy(() => import("../Components/Blog"));
// const Contact = lazy(() => import("../Components/Contact"));
// const Footer = lazy(() => import("../Components/Footer"));

// const Services = () => {
//   return (
//     <Suspense
//       fallback={
//         <div>
//           <Loading />
//         </div>
//       }
//     >
//       <div>
//         <div className="hero-all">
//           <Navbar />
//           <div className="h-head">
//             <div className="h-detail">
//               <hr />
//               <h1>Services</h1>
//             </div>
//           </div>
//         </div>


//         <div className="service-page">
//               <h2>Where do you want to install charging stations?</h2>
//               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
//           <div className="service-main">
//             <div className="service-box">
//                   <div className="service-img">
//                     <img src={service1} alt="" />
//                   </div>
//                   <div className="serv-detail">
//                     <h1>For Residential Locations</h1>
//                    <a href=""> <div className="ser-btn">
//                       <h1>Learn more</h1>
//                     </div></a>
//                   </div>
//             </div>
//             <div className="service-box">
//                   <div className="service-img">
//                     <img src={service2} alt="" />
//                   </div>
//                   <div className="serv-detail">
//                     <h1>For Fleet <br /> Parking </h1>
//                    <a href=""> <div className="ser-btn">
//                       <h1>Learn more</h1>
//                     </div></a>
//                   </div>
//             </div>
//             <div className="service-box">
//                   <div className="service-img">
//                     <img src={service3} alt="" />
//                   </div>
//                   <div className="serv-detail">
//                     <h1>For Commercial Locations</h1>
//                    <a href=""> <div className="ser-btn">
//                       <h1>Learn more</h1>
//                     </div></a>
//                   </div>
//             </div>

//           </div>

//         </div>



//      <Blog/>


//         <Contact/>
//         <Footer/>
//       </div>
//     </Suspense>
//   );
// };

// export default Services;

