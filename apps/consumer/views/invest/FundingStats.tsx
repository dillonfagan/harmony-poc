"use client";
import { showModal } from "@/lib/modal";
import classNames from "classnames";
import { useState } from "react";
import { useAccount } from "@/lib/account";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import InvestModal, { modalId as investModalId } from "./InvestModal";
import FeedbackModal, { modalId as feedbackModalId } from "./FeedbackModal";

type Props = {
  currentFunding: number;
  fundingGoal: number;
  isDeadlinePassed?: boolean;
};

export default function FundingStats({
  currentFunding,
  fundingGoal,
  isDeadlinePassed,
}: Props) {
  const { investmentCredits } = useAccount();
  const [currentFundingInternal, setCurrentFundingInternal] = useState<number>(currentFunding);
  const openInvestModal = () => showModal(investModalId);
  const openFeedbackModal = () => showModal(feedbackModalId);

  return (
    <div className="stats bg-base-100 border-base-300 border">
      <div className="stat flex flex-col">
        <div className="stat-title">Funding Goal</div>
        <div className="stat-value grow">{fundingGoal.toLocaleString()}</div>
        <div className="stat-actions mt-3">
          <span className="block font-semibold">
            {Math.floor((currentFundingInternal / fundingGoal) * 100)}% Funded
          </span>
          <progress
            className={classNames("progress w-full", {
              "progress-primary": !isDeadlinePassed,
              "progress-error":
                isDeadlinePassed && currentFundingInternal < fundingGoal,
              "progress-success": currentFundingInternal >= fundingGoal,
            })}
            value={currentFundingInternal}
            max={fundingGoal}
          />
        </div>
      </div>
      <div className="stat flex flex-col">
        <div className="stat-title">Current Funding</div>
        <div className="stat-value grow">
          {currentFundingInternal.toLocaleString()}
        </div>
        <div className="stat-actions flex gap-2 mt-3">
          <button
            className="btn btn-sm lg:btn-md btn-success grow"
            disabled={isDeadlinePassed || investmentCredits === 0}
            onClick={openInvestModal}
          >
            <HandThumbUpIcon className="size-6" />
          </button>
          <button
            className="btn btn-sm lg:btn-md btn-warning grow"
            disabled={isDeadlinePassed || investmentCredits === 0}
            onClick={openFeedbackModal}
          >
            <HandThumbDownIcon className="size-6" />
          </button>
          <InvestModal
            onInvest={(credits) =>
              setCurrentFundingInternal((prev) => prev + credits)
            }
          />
          <FeedbackModal />
        </div>
      </div>
    </div>
  );
}


