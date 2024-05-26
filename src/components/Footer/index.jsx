import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-box">
      <a
        className="font-bold text-3xl tracking-wide drop-shadow-lg cursor-pointer relative z-50"
        href="/"
      >
        Leman{" "}
        <span span className="text-primary-darkest">
          Shoes
        </span>
      </a>
      <div className="grid grid-cols-2 gap-8">
        <div className="footer-pv-info-box">
          <Link to="https://maps.app.goo.gl/MG3hHjz6H9C7xDG8A" target="_blank">
            <div className="footer-icon-box">
              <FaLocationDot className="footer-icon" />
            </div>
            <p>Azerbaijan, Baku</p>
          </Link>
          <Link to="tel:+994513106096" target='_blank'>
            <div className="footer-icon-box">
              <BsFillTelephoneFill className="footer-icon" />
            </div>
            <p>+994 51 310 60 96</p>
          </Link>
          <Link to="mailto:gahramanovalamann@gmail.com" target='_blank'>
            <div className="footer-icon-box">
              <SiGmail className="footer-icon" />
            </div>
            <p>gahramanovalamann@gmail.com</p>
          </Link>
        </div>
        <div className="footer-about">
          <h3 className="font-bold">About Web Page</h3>
          <p className="text-gray-800 text-sm">
            On that web page, I used third-party packages such as SweetAlerts,
            React Icons, React Redux, and React Router. For designing, I
            utilized Tailwind CSS. The website encompasses full functionality except signing because of backend process,
            and I utilize localhost as a mini-database. This is my mini frontend
            e-commerce shoe website.{" "}
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="https://github.com/Gahramanoval301" target='_blank'>
              <div className="footer-icon-box">
                <FaGithub className="footer-icon" />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/leman-gahramanova-0a3b6b2a5" target='_blank'>
              <div className="footer-icon-box">
                <FaLinkedin className="footer-icon" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
