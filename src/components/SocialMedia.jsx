import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/Nher10">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100070071263038">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/nherwin-ostia-232a00268/">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
