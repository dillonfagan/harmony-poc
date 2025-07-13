import { PlusIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";
import classNames from "classnames";
import Link from "next/link";
import { getInvestments } from "@/lib/investments";

export default function Invest() {
  const projects = getInvestments();

  return (
    <StretchColumn>
      <PageHeading title="Invest" subtitle="Use your investment credits to direct funding to community projects of your choosing." trailing={<SubmitProposalButton />} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <InvestmentCreditsCard />
          <LearnCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(({ id,name, category, summary, fundingGoal, currentFunding, deadline }) => {
            const funded = currentFunding >= fundingGoal;
            const percentFunded = Math.floor((currentFunding / fundingGoal) * 100);
            const fundingShortfall = fundingGoal - currentFunding;
            const formattedShortfall = fundingShortfall.toLocaleString();
            const deadlineDate = new Date(deadline);
            const formattedDeadline = deadlineDate.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            const isDeadlinePassed = deadlineDate < new Date();

            return (
              <Link href={`/invest/${id}`} key={name} className="bg-base-200 hover:bg-base-300 active:bg-base-200 card card-sm shadow-sm" role="button">
                <div className="card-body flex flex-col">
                  <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500">{category}</p>
                    {!isDeadlinePassed && <p className="text-sm text-gray-500"><span className="font-semibold">{formattedShortfall} Credits</span> by {formattedDeadline}</p>}
                    {isDeadlinePassed && <p className={classNames("font-semibold text-sm", { "text-error": !funded, "text-success": funded })}>{funded ? "Fully Funded" : "Ended"}</p>}
                  </div>
                  {summary && <p className="grow">{summary}</p>}
                  <div>
                    <p className="text-sm text-gray-500">{percentFunded}%</p>
                    <progress className={classNames("progress w-full", { "progress-primary": !funded && !isDeadlinePassed, "progress-error": !funded && isDeadlinePassed, "progress-success": funded })} value={currentFunding} max={fundingGoal} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </StretchColumn>
  );
}

function LearnCard() {
  return (
    <div className="card card-border card-sm">
      <div className="card-body">
        <div className="flex gap-2">
          <LightBulbIcon className="size-6 text-amber-400" />
          <h2 className="text-xl font-semibold mb-3">
            Learn
          </h2>
        </div>
        <p>When donations are turned into investment credits, these credits are distributed equally amongst every user on the Harmony platform. This gives everyone an equal voice in community funding decisions.</p>
        <p><strong>No more than 10% of a project's funding can come from a single user.</strong></p>
      </div>
    </div>
  );
}

function SubmitProposalButton() {
  return (
    <button className="btn btn-primary">
      <span className="md:mr-1"><PlusIcon className="size-6" /></span>
      <span className="hidden md:inline">New Proposal</span>
    </button>
  );
}