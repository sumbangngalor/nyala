import Banner from "./components/fragments/banners/BannerLeft";
import BannerRight from "./components/fragments/banners/BannerRight";
import HeroLayout from "./components/layouts/HeroLayout";
import NavLayout from "./components/layouts/NavLayout";
import ServiceLayout from "./components/layouts/ServiceLayout";
import HighlightLayout from "./components/layouts/HighlightLayout";
import Footer from "./components/fragments/footers/Footer";

export default function App() {
  return (
    <>
      <main>
        <NavLayout />
        <HeroLayout />
        <ServiceLayout />
        <Banner />
        <BannerRight />
        <HighlightLayout />
        <Footer />
      </main>
    </>
  );
}
