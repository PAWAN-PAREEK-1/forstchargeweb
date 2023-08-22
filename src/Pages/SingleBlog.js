import { lazy, Suspense } from "react";
import "../Style/Blog.css";
import chat from "../Assets/img/chat.svg";
import person from "../Assets/img/person.svg";

const Navbar = lazy(() => import("../Components/Navbar"));
const Loading = lazy(() => import("../Components/Loading"));


const Footer = lazy(() => import("../Components/Footer"));

const blogData = [
  {
    date: "20 May",
    title: "10 Reasons to switch to an EV",
    author: "Gustavo Baptista",
    comments: 10
  },
  {
    date: "9 May",
    title: "Factors that impact the range on an EV",
    author: "Randy Press",
    comments: 9
  },
  {
    date: "10 May",
    title: "Gujarat Electric Vehicle Policy 2021",
    author: "Carter Geidt",
    comments: 20
  }
];

const Blog = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div className="hero-all">
          <Navbar />
          <div className="h-head">
            <div className="h-detail">
              <hr />
              <h1>Blog</h1>
            </div>
          </div>
        </div>
    <div>


     <div className="blog-detail">
        <div className="left-blog">
        <div className="blog-box blog-box-main">
              <div className="bb-box">
                <div className="blog-box-1">
                  <div className="date-box " id="date">
                    <h1 id="b-h1">
                      20 <br />
                      May
                    </h1>
                  </div>

                </div>
                <div className="blog-box-2">
                  <h3 id="b-h3">
                    {" "}
                    <img src={person} alt="" />
                    Gustavo Baptista
                  </h3>
                  <hr />

                  <h3 id="b-h3">
                    {" "}
                    <img src={chat} alt="" />
                    10 Comment
                  </h3>
                </div>
              </div>
            </div>
        </div>
        <div className="right-blog">
              <h3>Factors that impact the range on an EV</h3>
              <p>Electric vehicles are gaining increased popularity in recent times and their sales are soaring all over the world. With more and more people becoming conscious about the environment and also getting attracted towards the latest technology, the uptake of EVs is steadily on the rise.</p>
              <p>Yet, a large majority still shies away from switching over to EVs due to range anxiety. Worse still, even the promised range at the time of purchasing an EV turns out to be merely a tentative number and this discourages the buyers further.</p>
              <p>Besides the weather, road conditions also play a huge role in impacting the driving range of an EV. A smooth road extracts less power from the battery and has a positive effect on the driving range of an EV. On the other hand, if the road is full of potholes, the motor derives more power from the battery pack and impacts negatively on the driving range. Being a developing country, India has long been struggling with its road infrastructure. Though many of the big cities now boast of better-quality roads, overall the roads in the country are not ideally suited for an EV to give a higher range.</p>

           <a href=""> <div className="learn-btn">
            <h4>LOAD MORE</h4>

            </div></a>
        </div>
      </div>



      <div className="blogs blogs-page">

        <h1 >Read Our Latest Blogs.</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>

        <div className="blog">
          {blogData.map((blog, index) => (
            <a href="" key={index}>
              <div className={`blog-box blog${index + 1}`}>
                <div className="bb-box">
                  <div className="blog-box-1">
                    <div className="date-box">
                      <h1>
                        {blog.date}
                      </h1>
                    </div>
                    <h2>{blog.title}</h2>
                  </div>
                  <div className="blog-box-2">
                    <h3>
                      <img src={person} alt="" />
                      {blog.author}
                    </h3>
                    <hr />

                    <h3>
                      <img src={chat} alt="" />
                      {blog.comments} Comment
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a href="">
    <div className="load-btn">
      <h4>More Blog</h4>
    </div>
    </a>
      </div>
    </div>
    <Footer/>
    </Suspense>
  )
}

export default Blog;
