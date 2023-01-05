import React from "react";
import {NavLink} from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              The iPhone is a line of smartphones designed and marketed by Apple
              Inc. These devices use Apple's iOS mobile operating system. The
              first-generation iPhone was announced by then-Apple CEO Steve Jobs
              on January 9, 2007. Since then, Apple has annually released new
              iPhone models and iOS updates. As of November 1, 2018, more than
              2.2 billion iPhones had been sold. As of 2022, the iPhone accounts
              for 15.6% of global smartphone market share.
            </p>

            <p className="lead mb-4">
              The iPhone was the first mobile phone with multi-touch
              technology.[4] Since the iPhone's launch, it gained larger screen
              sizes, video-recording, waterproofing, and many accessibility
              features. Up to iPhone 8 and 8 Plus, iPhones had a single button
              on the front panel with the Touch ID fingerprint sensor. Since
              iPhone X, iPhone models have switched to a nearly bezel-less front
              screen design with Face ID facial recognition, and app switching
              activated by gestures. Touch ID is still used for the budget
              iPhone SE series.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.jpg" alt="About Us" height="350rem" width="600rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
