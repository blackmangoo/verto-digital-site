import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import SampleWork from "@/components/sections/SampleWork";
import WhyVerto from "@/components/sections/WhyVerto";
import FoundersNote from "@/components/sections/FoundersNote";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Services />
      <Process />
      <SampleWork />
      <WhyVerto />
      <FoundersNote />
      <Contact />
    </>
  );
}
