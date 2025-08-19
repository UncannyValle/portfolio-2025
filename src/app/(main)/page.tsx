import { Hero } from "@/app/(main)/components/hero";
import { AboutMe } from "@/app/(main)/components/about-me";

export default function Home() {
  return (
    <div className="relative top-8">
      <Hero />
      <AboutMe />
    </div>
  );
}
