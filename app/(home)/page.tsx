import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import LatestEvents from "./_components/latest-events";
import FeaturedListings from "./_components/featured-listings";
import TrainingEra from "./_components/training-era";
import PrimaryProjects from "./_components/primary-projects";
import BankPartners from "./_components/bank-partners";
import Networks from "./_components/networks";
import WhyUs from "./_components/why-us";
import TopAssociate from "./_components/top-associate";
import TopBroker from "./_components/top-broker";
import Categories from "./_components/categories";

export default function HomePage() {
  return (
    <>
      {/* Heero */}

      {/* Search */}

      {/* Categories */}
      <Categories />

      {/* FeaturedListings */}
      <FeaturedListings />

      {/* LatestEvents */}
      <LatestEvents />

      {/* TopBroker */}
      <TopBroker />

      {/* TopAssociate */}
      <TopAssociate />

      {/* WhyUs */}
      <WhyUs />

      {/* Networks */}
      <Networks />

      {/* TrainingEra */}
      <TrainingEra />

      {/* PrimaryProjects */}
      <PrimaryProjects />

      {/* BankPartners */}
      <BankPartners />
    </>
  );
}
