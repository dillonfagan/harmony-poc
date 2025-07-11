import InformationCircle from "@/components/icons/InformationCircle";

export default function InvestmentCreditsCard() {
  return (
    <div className="bg-secondary text-secondary-content card p-4 shadow">
      <div className="flex justify-between align-top">
        <h2 className="text-lg font-semibold mb-3">Investment Credits</h2>
        <div className="tooltip tooltip-left lg:tooltip-bottom" data-tip="Your investment credits are used to fund community projects."><InformationCircle /></div>
      </div>
      <p className="text-2xl md:text-3xl font-bold">789</p>
    </div>
  );
}