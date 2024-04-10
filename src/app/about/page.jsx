/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Popup from "@/components/Popup/popUp"; // Ensure the path is correct
import "./page.css";

function About() {
  // Set the initial state to true to show the popup immediately
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];

  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
      <div className="heading">
        <h2>This is Woody's page</h2>
        <img src="/loading.gif" alt="loading..." className="image" />
        <a>Woody is too busy to upload information to the page.</a>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} message="This is not finished yet! Come back later." />
      <Footer links={links} />
    </div>
  );
}

export default About;
