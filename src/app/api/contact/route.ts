import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  ip: string;
  screen: string;
  deviceType: string;
  browser: string;
  os: string;
  userAgent: string;
}

// E-posta gönderme işlemi
const sendEmail = async (formData: FormData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail servisi
    auth: {
      user: process.env.GMAIL_USER, // Gmail hesabınız
      pass: process.env.GMAIL_PASS, // Gmail şifreniz veya App Password
    },
    tls: {
      rejectUnauthorized: false, // Güvenlik hatalarını önlemek için
    },
  });

  const mailOptions = {
    from: `${formData.email}`,
    to: "info@kipras.com.tr", // Alıcı adresi
    subject: `Yeni İletişim Mesajı - ${formData.name}`,
    html: `
      <h2>İletişim Formu Detayları</h2>
      <p><strong>Tam Ad:</strong> ${formData.name}</p>
      <p><strong>E-posta:</strong> ${formData.email}</p>
      <p><strong>Telefon Numarası:</strong> ${formData.phone}</p>
      <p><strong>Mesaj:</strong> ${formData.message}</p>
      <hr>
      <h3>Kullanıcı Cihaz ve Bağlantı Bilgileri</h3>
      <p><strong>IP Adresi:</strong> ${formData.ip}</p>
      <p><strong>Ekran Çözünürlüğü:</strong> ${formData.screen}</p>
      <p><strong>Cihaz Türü:</strong> ${formData.deviceType}</p>
      <p><strong>Tarayıcı:</strong> ${formData.browser}</p>
      <p><strong>İşletim Sistemi:</strong> ${formData.os}</p>
      <p><strong>User-Agent:</strong> ${formData.userAgent}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("E-posta gönderilemedi:", error);
    throw new Error("E-posta gönderilemedi");
  }
};

// POST isteğini işlemek için named export
export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    // Form verilerini doğrulayın
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Eksik form bilgileri" },
        { status: 400 }
      );
    }

    await sendEmail(formData);
    return NextResponse.json(
      { message: "Form başarıyla gönderildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
