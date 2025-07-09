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
    <div className="bg-amber-200 card p-4 shadow">
      <h2 className="text-lg font-semibold mb-3">Consumption Credits</h2>
      <p className="text-2xl md:text-3xl font-bold">$1,234.56</p>
    </div>
  );
}

function InvestmentCreditsCard() {
  return (
    <div className="bg-indigo-200 card p-4 shadow">
      <h2 className="text-lg font-semibold mb-3">Investment Credits</h2>
      <p className="text-2xl md:text-3xl font-bold">$789.00</p>
    </div>
  );
}

function Introduction() {
  return (
    <div className="bg-white card p-4 shadow-xs">
      <h2 className="text-lg font-semibold mb-3">Welcome to Harmony!</h2>
      <span>This is your community investment platform. Donate money and receive credits in return. 95% of your contributions become consumption credits which are redeemable at local merchants. 5% of your contributions become investment credits, which are used to fund community projects.</span>
    </div>
  );
}