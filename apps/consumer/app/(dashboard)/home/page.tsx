import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import ActivationCard from "@/views/ActivationCard";
import ConsumptionCreditsCard from "@/views/ConsumptionCreditsCard";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";
import Link from "next/link";

export default function Home() {
  return (
    <StretchColumn>
      <PageHeading title="Hi, Alice" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <ConsumptionCreditsCard />
          <InvestmentCreditsCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivationCard />
          <InvestCard />
        </div>
      </div>
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