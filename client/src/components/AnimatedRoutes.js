import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Content from "../pages/Content/Content";

import About from "../pages/About/About";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../pages/Dashboard/Dashboard";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Content" element={<Content />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default AnimatedRoutes;
