import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a
        href={`https://facebook.com/dialog/share?app_id=256007410378829&display=popup&href=${url} `}
        target="_blank"
        rel="nonreferer"
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="nonreferer"
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a
        href={`https://www.redit.com/submit?url=${url}&title=${title}`}
        target="_blank"
        rel="nonreferer"
      >
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a
        href={`https://api.whatsapp.com/send/?text=${url}`}
        target="_blank"
        rel="nonreferer"
      >
        <FaWhatsappSquare className="text-[#25D366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
