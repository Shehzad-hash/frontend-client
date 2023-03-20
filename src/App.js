import Home from "./pages/home";
import Compare from "./pages/compare";
import Landing from "./pages/landingpage";
import Blogs from "./pages/blog";
import News from "./pages/news";
import Contact from "./pages/contact";
import React, { Component } from "react";
import Navigation from "./navi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const MyApp = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     {
//       path: "/compare", element: <Compare />
//     }

//     // { path: "component2", element: <Component2 /> },
//   ]);
//   return routes;
// };

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<Landing />} path="/" exact />
          <Route element={<Contact />} path="/contact" />
          <Route element={<News />} path="/News" />
          <Route element={<Blogs />} path="/Blogs" />
          {/* <Route element={<Home />} path="/home" />
          <Route element={<Compare />} path="/compare" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
