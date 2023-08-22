import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import "../src/Style/Global.css";


const Loading = lazy(() => import('./Components/Loading'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Reviews = lazy(() => import('./Pages/Reviews'));
const Contact = lazy(() => import('./Pages/Contact'));
const Blog = lazy(() => import('./Pages/Blog'));
const Services = lazy(() => import('./Pages/Services'));
const Faqs = lazy(() => import('./Pages/Faqs'));
const SingleBlog = lazy(() => import('./Pages/SingleBlog.js'));
const SingleService = lazy(() => import('./Pages/SingleService.js'));
// const Footer = lazy(() => import('./Components/Footer.js'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Reviews" element={<Reviews/>} />
            <Route path="/Faqs" element={<Faqs/>} />
            <Route path="/SingleBlog" element={<SingleBlog/>} />
            <Route path="/SingleService" element={<SingleService/>} />

            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          {/* <Footer/> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default App;
