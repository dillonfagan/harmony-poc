"use client";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import { formatDate } from "@/lib/format";
import { calculateLoanInterest, useInvestment } from "@/lib/investments";
import FundingStats from "@/views/invest/FundingStats";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type Props = {
  id: string;
};

export default function Investment({ id }: Props) {
  const project = useInvestment(id);

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  const { name, summary, fundingGoal, currentFunding, deadline, fundingType, interestRate, term } = project;
  const formattedDeadline = formatDate(deadline);
  const isDeadlinePassed = new Date(deadline) < new Date();

  const interestIncome = calculateLoanInterest(fundingGoal, interestRate, term);

  return (
    <StretchColumn>
      <PageHeading
        title={name}
        backLink={{ href: "/invest", label: "Investments" }}
        subtitle={
          <div className="flex flex-wrap gap-2">
            <div className={classNames("badge lg:badge-lg", {
              "badge-error": isDeadlinePassed && currentFunding < fundingGoal,
              "badge-success": currentFunding >= fundingGoal,
            })}>{formattedDeadline}</div>
          </div>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex flex-col gap-4">
          <FundingStats
            currentFunding={currentFunding}
            fundingGoal={fundingGoal}
            isDeadlinePassed={isDeadlinePassed}
          />
          {fundingType === "loan" && (
            <div className="card border border-base-300">
              <div className="card-body">
                <h2 className="text-xl font-semibold">Loan Details</h2>
                {interestIncome > 0 && <p className="font-semibold">This loan will generate ${interestIncome.toLocaleString()} in interest income.</p>}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="badge badge-lg badge-neutral">{`${((interestRate ?? 0) * 100).toFixed(2)}%`} Interest</span>
                  <span className="badge badge-lg badge-neutral">{term ? `${term} months` : "N/A"}</span>
                </div>
              </div>
            </div>
          )}
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
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="card border border-base-300">
            <div className="card-body">
              <p className="text-xl lg:text-3xl">{summary}</p>
              <p className="mt-3 max-w-prose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StretchColumn>
  );
}
