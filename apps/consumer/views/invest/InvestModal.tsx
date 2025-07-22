"use client";
import { useAccount } from "@/lib/account";
import { useState } from "react";
import InvestmentCreditsCard from "../InvestmentCreditsCard";

type InvestFormData = {
  amount: number;
};

export const modalId = "invest-modal";

export default function InvestModal({ onInvest }: { onInvest?: (credits: number) => void }) {
  const { investmentCredits, update } = useAccount();
  const [form, setForm] = useState<InvestFormData>({
    amount: investmentCredits > 100 ? 100 : investmentCredits,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const onSubmit = () => {
    update({ investmentCredits: investmentCredits - (form.amount ?? 0) });
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
              max={investmentCredits}
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