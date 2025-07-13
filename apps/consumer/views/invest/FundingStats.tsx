"use client";

import { showModal } from "@/lib/modal";
import classNames from "classnames";
import InvestmentCreditsCard from "../InvestmentCreditsCard";
import { useState } from "react";

type Props = {
  currentFunding: number;
  fundingGoal: number;
  isDeadlinePassed?: boolean;
};

const modalId = "invest-modal";

export default function FundingStats({
  currentFunding,
  fundingGoal,
  isDeadlinePassed
}: Props) {
  const openModal = () => showModal(modalId);

  return (
    <div className="stats bg-base-100 border-base-300 border">
      <div className="stat flex flex-col">
        <div className="stat-title">Funding Goal</div>
        <div className="stat-value grow">{fundingGoal.toLocaleString()}</div>
        <div className="stat-actions mt-3">
          <span className="block font-semibold">
            {Math.floor((currentFunding / fundingGoal) * 100)}% Funded
          </span>
          <progress
            className={classNames("progress w-full", {
              "progress-primary": !isDeadlinePassed,
              "progress-error": isDeadlinePassed && currentFunding < fundingGoal,
              "progress-success": currentFunding >= fundingGoal,
            })}
            value={currentFunding}
            max={fundingGoal}
          />
        </div>
      </div>
      <div className="stat flex flex-col">
        <div className="stat-title">Current Funding</div>
        <div className="stat-value grow">{currentFunding.toLocaleString()}</div>
        <div className="stat-actions mt-3">
          <button className="btn btn-sm lg:btn-md btn-success w-full" disabled={isDeadlinePassed} onClick={openModal}>
            Invest
          </button>
          <InvestModal />
        </div>
      </div>
    </div>
  );
}

function InvestModal() {
  const [form, setForm] = useState({
    amount: 100,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  return (
    <dialog id={modalId} className="modal modal-bottom md:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Invest</h3>
        <InvestmentCreditsCard />
        <div className="mt-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Credits</legend>
            <input className="input" required name="amount" type="number" value={form.amount} onChange={handleChange} min={1} max={2400} step={1} />
            <p className="label">How many credits would you like to allocate to this proposal?</p>
          </fieldset>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-3">Cancel</button>
            <button className="btn btn-success">Invest</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}