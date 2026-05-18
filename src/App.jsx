import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import ProductCategories from "./components/ProductCategories";
import ServiceProcess from "./components/ServiceProcess";
import SupplierDistribution from "./components/SupplierDistribution";
import News from "./components/News";
import Footer from "./components/Footer";

import { translations } from "./i18n";

export default function App() {
  const [lang, setLang] = useState("zh");

  const t = translations[lang];

  return (
    <div className="bg-white text-gray-900">
      <Header lang={lang} setLang={setLang} t={t} />

      <Hero t={t} />

      <Advantages t={t} />

      <AboutUs t={t} />

      <ProductCategories t={t} />

      <ServiceProcess t={t} />

      <SupplierDistribution t={t} />

      <News t={t} />

      <Footer t={t} />
    </div>
  );
}