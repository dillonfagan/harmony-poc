import { ResponsiveGrid, StretchColumn } from "@/components/layouts";
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
      <PageHeading title="Community Investments" subtitle="Use your investment credits to direct funding to community projects of your choosing." />
      <ResponsiveGrid>
        <InvestmentCreditsCard />
      </ResponsiveGrid>
      <ResponsiveGrid>
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
            <div key={name} className={"bg-base-200 card p-2 md:p-4 shadow-sm"}>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-500">{category}</p>
              {!isDeadlinePassed && <p className="text-sm text-gray-500"><span className="font-semibold">{formattedShortfall} Credits</span> by {formattedDeadline}</p>}
              {isDeadlinePassed && <p className={classNames("font-semibold text-sm", { "text-error": !funded, "text-success": funded })}>{funded ? "Fully Funded" : "Ended"}</p>}
              {summary && <p className="mt-2">{summary}</p>}
              <p className="text-sm text-gray-500 mt-3 mb-1">{percentFunded}%</p>
              <progress className={classNames("progress w-full", { "progress-primary": !funded && !isDeadlinePassed, "progress-error": !funded && isDeadlinePassed, "progress-success": funded })} value={currentFunding} max={fundingGoal} />
            </div>
          );
        })}
      </ResponsiveGrid>
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