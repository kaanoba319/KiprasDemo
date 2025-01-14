"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about5.jpg";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import videoThumb from "../../../public/images/about/about4.png";
import videoCircleImg from "../../../public/images/about/wrap.png";
import textShape from "../../../public/images/about/archi-text2.png";

import OurMissionAndVision from "./OurMissionAndVision";

const AboutUsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=SbZfAW8zv_A&ab_channel=netdm%C3%BCzik",
        ]}
      />

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>HAKKIMIZDA</span>
            <h2>
              Biz <b>KİPRAS GROUPs </b>'uz. Hayalleri İnşa Ediyor, Geleceği Şekillendiriyoruz.
            </h2>
          </div>

          <div className="about-image-three">
            <Image src={aboutImg} alt="image" width={1320} height={430} />
          </div>

          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                  KİPRAS GROUP olarak, mimari tasarım, inşaat ve proje yönetimindeki gelişmiş bakış açımızı 22 yıllık tecrübemizle hayata geçiriyoruz. Konut, ticari ve kamu projelerinde estetik, işlevsellik ve sürdürülebilirliği bir araya getirerek zamansız eserler oluşturuyoruz.
                  </p>

                  <ul className="list">
                    <li>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                      Yenilikçi Tasarım Anlayışı
                    </li>
                    <li>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                      22 Yıllık Uzmanlık ve Deneyim
                    </li>
                    <li>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} /> A client-centric
                      Müşteri Odaklı Yaklaşım
                    </li>
                    <li>
                      <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                      Sürdürülebilir Tasarım Uygulamaları
                    </li>
                  </ul>

                  <div className="about-image-wrap">
                    <Image src={videoThumb} alt="image" width={1052} height={1120} />

                    <div className="wrap-video">
                      <Image src={videoCircleImg} alt="image" width={184} height={184} />

                      <div
                        className="video-btn text-decoration-none"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="ri-play-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-three-right-content">
                  {/* OurMissionAndVision */}
                  <OurMissionAndVision />

                  <div className="about-wrap-content">
                    <h2>
                    Mimarlık ve İç Mimarlık Bizim İşimiz, Tutkumuz
                    </h2>
                    <p>
                    KİPRAS GROUP, mimari tasarım, master planlama, kentsel tasarım, iç
    mimari, alan planlaması ve programlama gibi alanlarda geniş kapsamlı
    hizmet veren bir tasarım firmasıdır. Tamamlanmış projelerimiz arasında
    uluslararası çapta beğeni toplayan ve ödüllü işler bulunmaktadır.
                    </p>
                    <p>
                    KİPRAS GROUP olarak, mimarlığın yalnızca binalardan ibaret
    olmadığına, yaşamımızı, çalışma şeklimizi ve çevremizle
    etkileşimimizi şekillendiren bir sanat olduğuna inanıyoruz. Yapılı
    çevreye dair derin bir anlayış ve sarsılmaz bir özveri ile
    müşterilerimizin hayallerini gerçeğe dönüştürüyor, mekanlara kimlik
    ve ruh katıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrap-shape">
          <Image src={textShape} alt="image" width={768} height={140} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
