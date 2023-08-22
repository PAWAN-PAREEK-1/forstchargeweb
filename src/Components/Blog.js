import React from "react";
import "../Style/Blog.css";
import chat from "../Assets/img/chat.svg";
import person from "../Assets/img/person.svg";

const Blog = () => {
  return (
    <div>
      <div className="blogs">
        <h1>Read Our Latest Blogs.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="blog">
          <a href="">
            <div className="blog-box">
              <div className="bb-box">
                <div className="blog-box-1">
                  <div className="date-box">
                    <h1>
                      20 <br />
                      May
                    </h1>
                  </div>
                  <h2>10 Reasons to switch to an EV</h2>
                </div>
                <div className="blog-box-2">
                  <h3>
                    {" "}
                    <img src={person} alt="" />
                    Gustavo Baptista
                  </h3>
                  <hr />

                  <h3>
                    {" "}
                    <img src={chat} alt="" />
                    10 Comment
                  </h3>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="blog-box blog2">
              <div className="bb-box">
                <div className="blog-box-1">
                  <div className="date-box">
                    <h1>
                      9 <br />
                      May
                    </h1>
                  </div>
                  <h2>Factors that impact the range on an EV</h2>
                </div>
                <div className="blog-box-2">
                  <h3>
                    {" "}
                    <img src={person} alt="" />
                    Randy Press
                  </h3>
                  <hr />

                  <h3>
                    {" "}
                    <img src={chat} alt="" />9 Comment
                  </h3>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="blog-box blog3">
              <div className="bb-box">
                <div className="blog-box-1">
                  <div className="date-box">
                    <h1>
                      10 <br />
                      May
                    </h1>
                  </div>
                  <h2>Gujarat Electric Vehicle Policy 2021</h2>
                </div>
                <div className="blog-box-2">
                  <h3>
                    {" "}
                    <img src={person} alt="" />
                    Carter Geidt
                  </h3>
                  <hr />

                  <h3>
                    {" "}
                    <img src={chat} alt="" />
                    20 Comment
                  </h3>
                </div>
              </div>
            </div>
          </a>
        </div>
<a href="">
    <div className="load-btn">
      <h4>More Blog</h4>
    </div>
    </a>

      </div>
    </div>
  );
};

export default Blog;
