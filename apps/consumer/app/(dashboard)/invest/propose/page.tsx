"use client";

import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import { calculateLoanInterest, FundingType, InterestRate, ProjectDomain, TermLength } from "@/lib/investments";
import LightBulbIcon from "@heroicons/react/24/solid/esm/LightBulbIcon";
import { useCallback, useMemo, useState } from "react";

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type ProposalFormData = {
  name: string;
  projectType: ProjectDomain;
  fundingType: FundingType;
  interestRate?: InterestRate;
  capitalNeeded: number;
  term?: TermLength;
  summary: string;
};

export default function ProposeProject() {
  const [formData, setFormData] = useState<ProposalFormData>({
    name: "",
    projectType: "external",
    fundingType: "loan",
    interestRate: 0.05,
    capitalNeeded: 1_000,
    term: 12,
    summary: "",
  });

  const minimumCapital = useMemo(() => formData.fundingType === "loan" ? 500 : 1, [formData.fundingType]);

  const interestIncome: number = useMemo(() => {
    const { capitalNeeded, interestRate, term, fundingType } = formData;
    if (fundingType === "grant" || !interestRate || !term) {
      return 0;
    }

    return Math.round(calculateLoanInterest(capitalNeeded, interestRate, term));
  }, [formData]);

  const onChange = useCallback((e: React.ChangeEvent<FormElement>) => {
    const { fundingType, projectType } = formData;
    const data = { ...formData, [e.target.name]: e.target.value };

    if (fundingType !== "loan" || projectType !== "external") {
      data.interestRate = 0;
    }

    if (projectType === "internal") {
      data.fundingType = "grant";
    }

    setFormData(data);
  }, [formData]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Project proposal submitted! An officer of the cooperative will review it shortly.");
  };

  return (
    <StretchColumn>
      <PageHeading title="Propose a Project" backLink={{ href: "/invest", label: "Investments" }} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="card border border-base-300">
            <div className="card-body">
              <div className="flex gap-2">
                <LightBulbIcon className="size-6 text-amber-400" />
                <h2 className="text-xl font-semibold mb-3">
                  Learn
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="lg:text-lg">Internal projects are owned by the cooperative, while external projects are owned by other organizations.</p>
                <p className="lg:text-lg">Internal projects are funded directly by the cooperative.</p>
                <p className="lg:text-lg">External projects may choose from a few funding options, including grants and loans.</p>
              </div>
            </div>
          </div>
        </div>
        <form className="lg:col-span-2 card shadow" onSubmit={onSubmit}>
          <div className="card-body">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Project Type</legend>
              <select className="select" name="projectType" value={formData.projectType} onChange={onChange}>
                <option value="internal">Internal</option>
                <option value="external">External</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Capital Needed ($)</legend>
              <input
                type="number"
                className="input"
                name="capitalNeeded"
                min={minimumCapital}
                value={formData.capitalNeeded}
                onChange={onChange}
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Funding Type</legend>
              <select className="select" name="fundingType" value={formData.fundingType} disabled={formData.projectType !== "external"} onChange={onChange}>
                <option value="grant">Grant</option>
                <option value="loan">Loan</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Interest Rate</legend>
              <select className="select" name="interestRate" value={formData.interestRate} disabled={formData.fundingType !== "loan" || formData.projectType !== "external"} onChange={onChange}>
                <option value={0}>No Interest</option>
                <option value={0.01}>1%</option>
                <option value={0.02}>2%</option>
                <option value={0.03}>3%</option>
                <option value={0.04}>4%</option>
                <option value={0.05}>5%</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Loan Term (Months)</legend>
              <select className="select" name="term" value={formData.term} disabled={formData.fundingType !== "loan"} onChange={onChange}>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={36}>36</option>
                <option value={48}>48</option>
                <option value={60}>60</option>
                <option value={72}>72</option>
                <option value={84}>84</option>
                <option value={96}>96</option>
                <option value={108}>108</option>
                <option value={120}>120</option>
              </select>
              {!!interestIncome && <p className="label">This loan will generate ${interestIncome.toLocaleString()} for future investment.</p>}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Project Name</legend>
              <input
                type="text"
                className="input lg:input-lg"
                name="name"
                value={formData.name}
                onChange={onChange}
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Project Summary</legend>
              <textarea className="textarea lg:textarea-lg" name="summary" value={formData.summary} onChange={onChange} required></textarea>
            </fieldset>

            <button type="submit" className="btn btn-primary mt-4 lg:w-max">Submit Proposal</button>
          </div>
        </form>
      </div>
    </StretchColumn>
  );
}