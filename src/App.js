import Home from "./pages/home";
import Compare from "./pages/compare";
import React, { Component } from "react";
import Navigation from "./navi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingpage";

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
          {/* <Route element={<Home />} path="/" exact /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<Compare />} path="compare" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
