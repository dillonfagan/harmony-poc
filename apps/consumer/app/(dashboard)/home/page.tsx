import { ResponsiveGrid, StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import ActivationCard from "@/views/ActivationCard";
import ConsumptionCreditsCard from "@/views/ConsumptionCreditsCard";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";
import Link from "next/link";

export default function Home() {
  return (
    <StretchColumn>
      <PageHeading title="Hi, Alice" />
      <ResponsiveGrid>
        <ConsumptionCreditsCard />
        <InvestmentCreditsCard />
      </ResponsiveGrid>
      <ResponsiveGrid>
        <ActivationCard />
        <InvestCard />
      </ResponsiveGrid>
    </StretchColumn>
  );
}

function InvestCard() {
  return (
    <div className="flex flex-col bg-base-200 card p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Invest in Community</h2>
      <span className="grow mb-4">Use your investment credits to direct funding to community projects of your choosing. It's easy to get started.</span>
      <Link href="/invest" className="btn btn-secondary">Start Investing</Link>
    </div>
  );
}