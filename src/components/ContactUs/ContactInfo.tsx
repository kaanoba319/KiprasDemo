"use client";

import React from "react";

// Social Links
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactInfo: React.FC = () => {
  return (
    <>
      <ul className="contact-info-list">
        <li>
          <span>ADRES</span>
          Fatih mh. Sanayi cd. No:18/A Gaziemir/İzmir
        </li>

        <li>
          <span>BİLGİ VE İLETİŞİM</span>
          <a href="mailto:info@kipras.com.tr">info@kipras.com.tr</a>
        </li>

        <li>
          <span>SOSYAL MEDYA</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              style={{ display: "flex" }}
              href="https://www.instagram.com/kiprasgroup/"
            >
              <FaInstagram style={{ marginRight: "10px" }} size={30} />
            </a>
            <a
              style={{ display: "flex" }}
              href="https://www.linkedin.com/company/kipras/posts/?feedView=all"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
