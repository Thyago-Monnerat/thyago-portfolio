import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header.tsx";
import Intro from "./components/intro.tsx";
import About from "./components/about.tsx";
import Projects from "./components/projects.tsx";
import Skills from "./components/skills.tsx";
import Footer from "./components/footer.tsx";
import ToTop from "./components/toTop.tsx";
import Frameworks from "./components/frameworks.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToTop />
    <Header />
    <Intro />
    <About />
    <Projects />
    <Skills />
    <Frameworks />
    <Footer />
  </React.StrictMode>
);
