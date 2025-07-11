import { PlusIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import InvestmentCreditsCard from "@/views/InvestmentCreditsCard";
import classNames from "classnames";

export default function Invest() {
  const projects: ProjectData[] = [
    {
      name: "Community Garden",
      category: "Environment",
      summary: "A community garden project to promote local food production and biodiversity.",
      fundingGoal: 5000,
      currentFunding: 1200,
      deadline: "2025-12-31"
    },
    {
      name: "Local Art Mural",
      category: "Arts & Culture",
      summary: "A mural project to beautify the neighborhood and support local artists.",
      fundingGoal: 3000,
      currentFunding: 800,
      deadline: "2025-11-30"
    },
    {
      name: "Youth Sports Program",
      category: "Youth Development",
      summary: "A sports program for underprivileged youth to promote health and teamwork.",
      fundingGoal: 7000,
      currentFunding: 2500,
      deadline: "2025-01-15"
    },
    {
      name: "Tool Library",
      category: "Community Services",
      summary: "A community tool library to provide access to tools for DIY projects and repairs.",
      fundingGoal: 4000,
      currentFunding: 4600,
      deadline: "2024-10-31"
    }
  ];

  return (
    <StretchColumn>
      <PageHeading title="Invest" subtitle="Use your investment credits to direct funding to community projects of your choosing." trailing={<SubmitProposalButton />} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <InvestmentCreditsCard />
          <LearnCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(({ name, category, summary, fundingGoal, currentFunding, deadline }) => {
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
              <div key={name} className="bg-base-200 card card-sm shadow-sm">
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
              </div>
            );
          })}
        </div>
      </div>
    </StretchColumn>
  );
}

type ProjectData = {
  name: string;
  category: string;
  summary: string;
  fundingGoal: number;
  currentFunding: number;
  deadline: string;
};

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