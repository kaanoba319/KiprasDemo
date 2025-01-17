"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import ContactInfo from "./ContactInfo";
import Image from "next/image";

import contactImg from "../../../public/images/contact/contact.png";
import shape from "../../../public/images/contact/shape.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactFormStyleTwo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setResponseMessage("Form başarıyla gönderildi!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowAlert(true);
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
      setResponseMessage("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3 saniye sonra alert kapanır

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <div className="contact-area bg-white-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-md-12 pe-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-image">
                <Image
                  src={contactImg}
                  alt="contact"
                  width={700}
                  height={1012}
                />
              </div>
            </div>

            <div
              className="col-lg-7 col-md-12 position-relative ps-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-form-wrap">
                <div className="title">
                  <span>İLETİŞİM</span>
                  <h2>Bizimle iletişime geçin, her zaman sizinleyiz..</h2>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>
                          İsminiz<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Jonathon Ronan"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          E-posta<span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="jonathonronana63@gmail.com"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Telefon<span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0533 123 123 1212"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Mesajınız<span>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Mesajınızı buraya yazın..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="default-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                      </button>
                    </form>
                    {showAlert && (
                      <div className="alert alert-success mt-3" role="alert">
                        {responseMessage}
                      </div>
                    )}
                  </div>

                  <div className="col-lg-5 col-md-6">
                    {/* ContactInfo */}
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-shape1">
          <Image src={shape} alt="image" width={116} height={82} />
        </div>
      </div>
    </>
  );
};

export default ContactFormStyleTwo;
