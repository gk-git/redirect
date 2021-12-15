import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RotatingCompass from "../../components/RotatingCompass";

export default function DefaultLayout({ children, baseUrl }) {
  return (
    <>
      <RotatingCompass />
      <Header baseUrl={baseUrl} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
