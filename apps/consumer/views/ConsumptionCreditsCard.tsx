import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function ConsumptionCreditsCard() {
  return (
    <div className="bg-primary text-primary-content card p-4 shadow">
      <div className="flex justify-between align-top">
        <h2 className="text-lg font-semibold mb-3">Consumption Credits</h2>
        <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="Your consumption credits are redeemable for goods and services from local merchants.">
          <InformationCircleIcon className="size-6" />
        </div>
      </div>
      <p className="text-2xl md:text-3xl font-bold">1,234</p>
    </div>
  );
}