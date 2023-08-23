import { lazy, Suspense } from "react";
import "../Style/Global.css";
import leader1 from "../Assets/img/l1.svg";
import leader2 from "../Assets/img/l2.svg";
import leader3 from "../Assets/img/l3.svg";
const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));
const Mission = lazy(() => import("../Components/Mission"));
const Blog = lazy(() => import("../Components/Blog"));
const Footer = lazy(() => import("../Components/Footer"));

const About = () => {
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
              <h1>About Us</h1>
            </div>
          </div>
        </div>

        <Mission />

        <div className="team-container">
          <div className="team-header">Our Leadership Team</div>
          <div className="team-row">
            <div className="team-image">
              <img src={leader1} alt="Image" />
            </div>
            <div className="team-text">
              <h2>Jeel Contractor</h2>
              <h3>Founder & Managing Director</h3>
              <p>
                Mr. Jeel Contractor, Founder, an entrepreneur and technologist,
                has 6 Years of experience in the renewable energy and EV
                industry. His passion to enlighten the world with renewable
                energy as being a core electrical engineer started his career
                with designing solar rooftop and ground mounted projects at
                Kashyap Solar in 2015. He holds a Master degree in Electrical
                Engineering specialized in power electronics from Nirma
                University, Ahmedabad. He brings expertise in engineering
                combined with business acumen. He plays a vital role in
                strategic sourcing and interpersonal relationship with all
                suppliers and vendors who in turn support the Company’s growth.
                He has deep understanding of this sector and his core strength
                lies in evaluating technologies and solutions, which help
                company in executing projects globally. He also drives the
                complete sales cycle for identified projects including enquiry
                generation, offer submission, techno-commercial discussion,
                financial negotiation, contract signing as well as corresponded
                with local and state regulatory authorities regarding policies.
              </p>
            </div>
          </div>
          <div className="team-row teamrow2">
            <div className="team-text">
              <h2>Krunal Patel</h2>
              <h3>Director</h3>
              <p>
                Mr. Krunal Patel, Director, has 12 Years of experience in the
                field of renewable industry. He holds a bachelor degree in
                Electrical Engineering. He has a rich experience of working in
                companies like ABB and Suzlon and moved to Kashyap solar in
                2010. His expertise lies in project management of Kashyap solar
                power projects. His vast network in Solar Companies proves his
                ability to build a great relation with big players and having a
                strong approach (Network) in Rural Market. He is handling a
                multidisciplinary team of engineers, supply chain, EPC, quality
                and reliability for complete India. He has hands on experience
                in renewable industry and has been involved in many residential,
                industrial and commercial projects. He has deep understanding of
                this sector and his core strength lies in project management,
                execution with best practices which help company in executing
                projects globally.
              </p>
            </div>
            <div className="team-image">
              <img src={leader2} alt="Image" />
            </div>
          </div>
          <div className="team-row">
            <div className="team-image">
              <img src={leader3} alt="Image" />
            </div>
            <div className="team-text">
              <h2>Hiren Bhavsar</h2>
              <h3>Director</h3>
              <p>
                Mr. Hiren Bhavsar, Director, has over 23 years of experience in
                the engineering industry. The passion for new energy (including
                distributed renewable energy, energy storage and electric
                mobility) led him to set up the best company. He is president of
                South Gujarat solar association. He started his career in 1997
                soon after his graduation by establishing an electrical trading
                company and moved in renewable energy Industry. He has
                successfully created value to the company like ABB, Siemens,
                Essar, Hazira, Polycab, etc. His 23 years of past experience has
                made him Possess a strong analytical and problem solving skills,
                with the ability to make well thought out decisions. He has
                commissioned more than 100+ MW solar rooftop and ground mounted
                projects and given consultancy for many MW Ground Mounted
                projects in India. He has been associated with the financial
                planning, developing relationships, promoting the brand and
                developing national as well as international sales.
              </p>
            </div>
          </div>
        </div>

        <Blog/>
        <Footer/>
      </div>
    </Suspense>
  );
};

export default About;
