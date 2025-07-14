import { getInvestmentCredits } from "@/lib/account";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function CommunityCreditsCard() {
  const credits = getInvestmentCredits();
  return (
    <div className="bg-accent text-accent-content card card-sm shadow">
      <div className="card-body">
        <div className="flex justify-between align-top">
          <h2 className="text-lg font-semibold mb-3">Community Fund</h2>
          <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="This is the total amount of credits available for community projects.">
            <InformationCircleIcon className="size-6" />
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-bold">{(credits*100).toLocaleString()}</p>
      </div>
    </div>
  );
}