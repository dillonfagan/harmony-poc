"use client";

import { showModal } from "@/lib/modal";
import classNames from "classnames";
import InvestmentCreditsCard from "../InvestmentCreditsCard";
import { useState } from "react";
import { getInvestmentCredits, setInvestmentCredits } from "@/lib/account";

type Props = {
  currentFunding: number;
  fundingGoal: number;
  isDeadlinePassed?: boolean;
};

const modalId = "invest-modal";

export default function FundingStats({
  currentFunding,
  fundingGoal,
  isDeadlinePassed,
}: Props) {
  const [currentFundingInternal, setCurrentFundingInternal] = useState<number>(currentFunding);
  const openModal = () => showModal(modalId);

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
        <div className="stat-actions mt-3">
          <button
            className="btn btn-sm lg:btn-md btn-success w-full"
            disabled={isDeadlinePassed}
            onClick={openModal}
          >
            Invest
          </button>
          <InvestModal
            onInvest={(credits) =>
              setCurrentFundingInternal((prev) => prev + credits)
            }
          />
        </div>
      </div>
    </div>
  );
}

type InvestFormData = {
  amount: number | undefined;
};

function InvestModal({ onInvest }: { onInvest?: (credits: number) => void }) {
  const creditBalance = getInvestmentCredits();
  const [form, setForm] = useState<InvestFormData>({
    amount: creditBalance > 100 ? 100 : creditBalance,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const data = { ...form, [e.target.name]: Number(e.target.value) };
    if (data.amount === 0) {
      data.amount = undefined;
    }

    setForm(data);
  };

  const onSubmit = () => {
    setInvestmentCredits(creditBalance - (form.amount ?? 0));
    onInvest?.(form.amount ?? 0);
  };

  return (
    <dialog id={modalId} className="modal modal-bottom md:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Invest</h3>
        <InvestmentCreditsCard />
        <div className="mt-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Credits</legend>
            <input
              className="input"
              required
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              min={1}
              max={creditBalance}
              step={1}
            />
            <p className="label">
              How many credits would you like to allocate to this proposal?
            </p>
          </fieldset>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-3">Cancel</button>
            <button className="btn btn-success" onClick={onSubmit}>
              Invest
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
