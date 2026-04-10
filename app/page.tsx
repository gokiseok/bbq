import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import GroupSpace from "@/components/GroupSpace";
import Reviews from "@/components/Reviews";
import ReservationCTA from "@/components/ReservationCTA";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Menu />
        <GroupSpace />
        <Reviews />
        <ReservationCTA />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
