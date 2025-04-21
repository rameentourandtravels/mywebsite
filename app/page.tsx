import Feature from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <WhatsAppButton/>
      <Hero />
      <Feature />
      <Packages />
      <Testimonial />
    </main>
  );
}
