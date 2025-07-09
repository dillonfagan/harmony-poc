import { ResponsiveGrid, StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import ConsumptionCreditsCard from "@/views/ConsumptionCreditsCard";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";

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
      </ResponsiveGrid>
    </StretchColumn>
  );
}

function ActivationCard() {
  return (
    <div className="bg-base-200 card p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Harmony Card</h2>
      <span className="mb-4">It looks like you still haven't activated your Harmony Card. Use it to redeem your consumption credits at participating merchants.</span>
      <button className="btn btn-primary">Activate Card</button>
    </div>
  );
}