import React from "react";
import footerImg from "../../../images/footerbg.jpg";
import logo from "../../../images/logo.png";

const bgImg = {
  backgroundImage: `url(${footerImg})`,
};

const Footer = () => {
  return (
    <footer style={bgImg} className="text-white text-center py-5 mt-3">
      <small>
        &copy; All Right Reserved <img src={logo} height="25px" alt="" />{" "}
        {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
