import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function InvestmentCreditsCard() {
  return (
    <div className="bg-secondary text-secondary-content card card-sm shadow">
      <div className="card-body">
        <div className="flex justify-between align-top">
          <h2 className="text-lg font-semibold mb-3">Investment Credits</h2>
          <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="Your investment credits are used to fund community projects.">
            <InformationCircleIcon className="size-6" />
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-bold">2,400</p>
      </div>
    </div>
  );
}