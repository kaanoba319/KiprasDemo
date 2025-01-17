"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840053357788!2d27.128722515728857!3d38.30617457966159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd964baf30f4f%3A0x429dce47f4dd4574!2sFatih%2C%20Sanayi%20Cd.%20No%3A18%2FA%2C%2035420%20Gaziemir%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1694183689623!5m2!1str!2str"></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
