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

        </div>
        <div className="right-blog">
          
        </div>
      </div>



      <div className="blogs">
        <h1>Read Our Latest Blogs.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
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
      </div>
    </div>
    <Footer/>
    </Suspense>
  )
}

export default Blog;
