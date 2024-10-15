import BannerRight from "./components/fragments/banners/BannerRight";
import BannerLeft from "./components/fragments/banners/BannerLeft";
import HeroLayout from "./components/layouts/HeroLayout";
import NavLayout from "./components/layouts/NavLayout";
import ServiceLayout from "./components/layouts/ServiceLayout";
import HighlightLayout from "./components/layouts/HighlightLayout";
import Footer from "./components/fragments/footers/Footer";

export default function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <NavLayout />
        <HeroLayout />
        <BannerLeft />
        <BannerRight />
        <ServiceLayout />
        <HighlightLayout />
        <Footer />
      </main>
    </>
  );
}
