import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import ActivationCard from "@/views/ActivationCard";
import ConsumptionCreditsCard from "@/views/ConsumptionCreditsCard";

export default function Market() {
  const merchants: MerchantData[] = [
    {
      name: "Harmony Coffee",
      category: "Food & Beverage",
      summary: "A cozy coffee shop offering a variety of brews and pastries."
    },
    {
      name: "Harmony Books",
      category: "Books & Media",
      summary: "A local bookstore with a wide selection of books and magazines."
    },
    {
      name: "Harmony Fitness",
      category: "Health & Wellness",
      summary: "A gym that offers fitness classes and personal training sessions."
    },
    {
      name: "Harmony Night Club",
      category: "Entertainment",
      summary: "A vibrant night club with live music, dance floors, and a lounge."
    },
    {
      name: "Harmony Cafeteria",
      category: "Food & Beverage",
      summary: "A cafeteria serving a variety of meals and snacks for all tastes."
    },
    {
      name: "Harmony Market",
      category: "Groceries",
      summary: "A local grocery store providing fresh produce and everyday essentials."
    },
    {
      name: "Harmony Tech Store",
      category: "Electronics",
      summary: "A tech store offering the latest gadgets, electronics, and support."
    },
    {
      name: "Harmony Motors",
      category: "Automotive",
      summary: "An automotive shop specializing in electric vehicle sales, repairs, and maintenance - from bicycles to cars."
    },
    {
      name: "Harmony Cuts",
      category: "Personal Care",
      summary: "A hair salon providing haircuts, styling, and beauty treatments."
    },
    {
      name: "Harmony Tool Library",
      category: "Community Services",
      summary: "A community tool library where you can borrow tools for DIY projects."
    }
  ];

  return (
    <StretchColumn>
      <PageHeading title="Merchants" subtitle="Find participating merchants that accept Harmony credits." />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <ConsumptionCreditsCard />
          <ActivationCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {merchants.map(({ name, category, summary }) => (
            <div key={name} className="bg-base-200 card card-sm shadow-sm">
              <div className="card-body">
                <div>
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <p className="text-sm text-gray-500">{category}</p>
                </div>
                {summary && <p className="mt-2">{summary}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StretchColumn>
  );
}

type MerchantData = {
  name: string;
  category: string;
  summary?: string;
};