import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import data from "@/data/data.json";

export default function Home() {
  const { hero, about } = data.home;
  return (
    <>
      <HeroSection data={hero} />
      <AboutSection data={about} />
    </>
  );
}
