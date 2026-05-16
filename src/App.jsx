import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import ProductCategories from "./components/ProductCategories";
import ServiceProcess from "./components/ServiceProcess";
import SupplierDistribution from "./components/SupplierDistribution";
import News from "./components/News";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Advantages />
      <AboutUs />
      <ProductCategories />
      <ServiceProcess />
      <SupplierDistribution />
      <News />
      <Footer />
    </div>
  );
}