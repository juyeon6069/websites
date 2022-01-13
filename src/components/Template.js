import React from "react";
import "./Template.css";

const Template = ({ form, list }) => {
  return (
    <div>
      <div className="template">
        <div className="title">Hello! I'm Juyeon.</div>
      </div>

      <div className="form-container">
        <div className="container-left">
          {form}
          <p>
            <img className="Me" alt="Name" src="/images/CharlieBrown.gif"></img>
          </p>
          <p>Juyeon Nam</p>
        </div>
        <div className="container-right">
          <p>
            <img
              className="Uni"
              alt="University"
              src="/images/Uni.png/"
              width="45px"
            ></img>
            Computer Science, StonyBrook, SUNY,
          </p>
          <p>
            <img
              className="Email"
              alt="Email"
              src="/images/Email.png"
              width="45px"
            ></img>
            juyeon.nam@stonybrook.edu
          </p>
          <p>
            <img
              className="Phone"
              alt="Phone"
              src="/images/Phone.png"
              width="45px"
            ></img>
            010-0000-0000
          </p>
          <p>
            <img
              className="Click"
              alt="Club"
              src="/images/Click.png"
              width="45px"
            ></img>
            HIGHEND
          </p>
        </div>
      </div>

      <div className="template">
        <div className="list-container">
          {list}
          <a href="https://github.com/juyeon6069">Visit My GitHub!</a>
        </div>
      </div>
    </div>
  );
};

export default Template;
