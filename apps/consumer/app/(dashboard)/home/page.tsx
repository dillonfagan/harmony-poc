"use client";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import ActivationCard from "@/views/ActivationCard";
import CommunityCreditsCard from "@/views/CommunityCreditsCard";
import ConsumptionCreditsCard from "@/views/ConsumptionCreditsCard";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";
import Link from "next/link";

export default function Home() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <StretchColumn>
      <PageHeading title="Hi, Alice" subtitle={formattedDate} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <ConsumptionCreditsCard />
          <InvestmentCreditsCard />
          <CommunityCreditsCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivationCard />
          <InvestCard />
          <LearnCard />
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

function LearnCard() {
  return (
    <div className="card border border-base-300">
      <div className="card-body">
        <h2 className="text-xl font-semibold">How does Harmony work?</h2>
        <ol className="list-decimal pl-6 mt-2 space-y-1 lg:text-lg">
          <li>Deposit money to receive consumption credits.</li>
          <li>Redeem consumption credits at participating businesses. No transaction fees!</li>
          <li>All deposited cash is used to fund grants for community projects.</li>
        </ol>
      </div>
    </div>
  );
}