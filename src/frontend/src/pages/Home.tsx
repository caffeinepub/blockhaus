import BestSellerSection from "../components/BestSellerSection";
import BrandStorySection from "../components/BrandStorySection";
import CategoryShowcaseSection from "../components/CategoryShowcaseSection";
import HeroSection from "../components/HeroSection";
import MarqueeStrip from "../components/MarqueeStrip";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip bgColor="black" />
      <BestSellerSection />
      <ProductGrid />
      <CategoryShowcaseSection />
      <MarqueeStrip bgColor="orange" />
      <BrandStorySection />
    </main>
  );
}
