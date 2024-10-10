
import BarberPricing from "./components/BarberPricing/BarberPricing";
import BarberShopHero from "./components/BarberShopHero/BarberShopHero";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import NewsBlog from "./components/NewsBlog/NewsBlog";
import OurClients from "./components/OurClients/OurClients";
import OurServices from "./components/OurServices/OurServices";
import OurWork from "./components/OurWork/OurWork";
import Specialists from "./components/Specialists/Specialists";
import Stats from "./components/Stats/Stats";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Introduction/>
     <OurServices/>
     <ContactUs/>
     <Stats/>
     <Specialists/>
     <Testimonial/>
     <BarberPricing/>
     <BarberShopHero/>
     <NewsBlog/>
     <OurClients/>
     <OurWork/>
     <Footer/>
    </div>
   
  );
}
