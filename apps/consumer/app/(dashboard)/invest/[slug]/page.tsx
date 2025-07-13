import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import { formatDate } from "@/lib/format";
import { getInvestment } from "@/lib/investments";
import { UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = getInvestment(slug);

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  const { name, category, summary, fundingGoal, currentFunding, deadline } = project;
  const formattedDeadline = formatDate(deadline);

  return (
    <StretchColumn>
      <PageHeading
        title={name}
        backLink={{ href: "/invest", label: "Investments" }}
        subtitle={
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-outline lg:badge-lg shadow-sm">{category}</div>
            <div className="badge badge-soft lg:badge-lg shadow-sm">{formattedDeadline}</div>
          </div>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <FundingStats
            currentFunding={currentFunding}
            fundingGoal={fundingGoal}
          />
          <div className="card border border-base-300">
            <div className="card-body">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="bg-primary text-primary-content rounded-full p-2">
                    <UserCircleIcon className="size-6" />
                  </div>
                </div>
                <h2 className="font-semibold text-xl">James Poster</h2>
              </div>
              <p>James has been a community member since 2025. He lives in Providence with his cat.</p>
            </div>
          </div>
        </div>
        <div className="card border border-base-300 lg:col-span-2">
          <div className="card-body">
            <p className="text-xl lg:text-3xl">{summary}</p>
            <p className="mt-3 max-w-prose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </StretchColumn>
  );
}

function FundingStats({
  currentFunding,
  fundingGoal,
}: {
  currentFunding: number;
  fundingGoal: number;
}) {
  return (
    <div className="stats bg-base-100 border-base-300 border">
      <div className="stat">
        <div className="stat-title">Funding Goal</div>
        <div className="stat-value">{fundingGoal.toLocaleString()}</div>
        <div className="stat-actions mt-3 grow">
          <span className="block font-semibold">
            {Math.floor((currentFunding / fundingGoal) * 100)}% Funded
          </span>
          <progress
            className="progress w-full progress-primary"
            value={currentFunding}
            max={fundingGoal}
          />
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Current Funding</div>
        <div className="stat-value">{currentFunding.toLocaleString()}</div>
        <div className="stat-actions mt-3 grow">
          <button className="btn btn-xs lg:btn-sm btn-success w-full">
            Invest
          </button>
        </div>
      </div>
    </div>
  );
}
