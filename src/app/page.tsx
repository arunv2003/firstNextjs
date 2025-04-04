import FeaturedCourses from "@/component/FeaturedCourses";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Instructors from "@/component/Instructors";
import MusicSchoolTestimonial from "@/component/TestmonialCards";
import UpcomingWebinars from "@/component/UpcomingWebinars";
import WhyChooseUs from "@/component/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
