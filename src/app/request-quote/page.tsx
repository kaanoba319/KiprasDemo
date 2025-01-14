import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import RequestAQuoteForm from "@/components/RequestAQuote/RequestAQuoteForm";
import Footer from "@/components/Layout/Footer";

// PageTitle bileşenine CTA butonu eklenmiştir.
export default function Page() {
  return (
    <>
      {/* Navbar */}
      <NavbarStyleTwo />

      {/* Sayfa Başlığı */}
      <PageTitle
        title="Request a Quote"
        homeText="Home"
        homeUrl="/"
        cta={{
          text: "Hemen Teklif Al",
          url: "/start",
        }}
      />

      {/* Teklif Formu */}
      <RequestAQuoteForm />

      {/* Footer */}
      <Footer />
    </>
  );
}
