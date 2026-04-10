import HeaderEn from "@/components/en/HeaderEn";
import HeroEn from "@/components/en/HeroEn";
import StatsBarEn from "@/components/en/StatsBarEn";
import AboutEn from "@/components/en/AboutEn";
import MenuEn from "@/components/en/MenuEn";
import GroupSpaceEn from "@/components/en/GroupSpaceEn";
import ReviewsEn from "@/components/en/ReviewsEn";
import ReservationCTAEn from "@/components/en/ReservationCTAEn";
import LocationEn from "@/components/en/LocationEn";
import FAQEn from "@/components/en/FAQEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";
import { restaurantSchemaEn, faqSchemaEn } from "./schemas";

export default function HomeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchemaEn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEn) }}
      />
      <HeaderEn />
      <main>
        <HeroEn />
        <StatsBarEn />
        <AboutEn />
        <MenuEn />
        <GroupSpaceEn />
        <ReviewsEn />
        <ReservationCTAEn />
        <LocationEn />
        <FAQEn />
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
