import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Intro from "../../components/intro/Intro";
import Contact from "../../components/contact/Contact";
import "./home.scss";
import { useState } from "react";
import Menu from "../../components/menu/Menu";
import Topseller from "../../components/topseller/Topseller";
import Aboutus from "../../components/aboutus/Aboutus";
import ServiceFeature from "../../components/serviceFeature/ServiceFeature";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <ServiceFeature />
        <Topseller />
        <Aboutus />
        <Contact />
      </div>
    </div>
  );
}
