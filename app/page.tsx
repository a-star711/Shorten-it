import Hero from "@/components/hero/Hero";
import SectionWithBoxes from "@/components/section/SectionWithBoxes";
import UrlShortener from "@/components/url-shortener/url-shortener";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <div className="flex justify-center pt-8">
        <UrlShortener />
      </div>
      <SectionWithBoxes />
    </>
  );
}
