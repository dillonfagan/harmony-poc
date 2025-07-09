import InformationCircle from "@/components/icons/InformationCircle";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch gap-4 p-4 lg:p-8">
      <Cards />
      <Introduction />
    </div>
  );
}

function Cards() {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ConsumptionCreditsCard />
      <InvestmentCreditsCard />
    </div>
  );
}

function ConsumptionCreditsCard() {
  return (
    <div className="bg-primary text-primary-content card p-4 shadow">
      <div className="flex justify-between align-top">
        <h2 className="text-lg font-semibold mb-3">Consumption Credits</h2>
        <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="Your consumption credits are redeemable for goods and services from local merchants."><InformationCircle /></div>
      </div>
      <p className="text-2xl md:text-3xl font-bold">$1,234.56</p>
    </div>
  );
}

function InvestmentCreditsCard() {
  return (
    <div className="bg-secondary text-secondary-content card p-4 shadow">
      <div className="flex justify-between align-top">
        <h2 className="text-lg font-semibold mb-3">Investment Credits</h2>
        <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="Your investment credits are used to fund community projects."><InformationCircle /></div>
      </div>
      <p className="text-2xl md:text-3xl font-bold">$789.00</p>
    </div>
  );
}

function Introduction() {
  return (
    <div className="bg-base-200 card p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Harmony Card</h2>
      <span className="mb-4">It looks like you still haven't activated your Harmony Card. Use it to redeem your consumption credits at participating merchants.</span>
      <button className="btn btn-primary">Activate Card</button>
    </div>
  );
}