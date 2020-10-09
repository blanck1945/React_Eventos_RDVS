import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import "./Up_Footer.scss";

const Up_Footer = () => {
  return (
    <div className="up_footer">
      <div className="up_div">
        <h3 className="up_text">Siganos en nuetras redes sociales</h3>
        <div className="social_div">
          <FaFacebookF className="social_icon face" />
          <AiOutlineTwitter className="social_icon tw" />
          <FaPinterestP className="social_icon pinte" />
          <AiOutlineInstagram className="social_icon insta" />
        </div>
      </div>
    </div>
  );
};

export default Up_Footer;
