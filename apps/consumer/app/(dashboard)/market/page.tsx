import { StretchColumn } from "@/components/layouts";

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
      summary: "An automotive shop specializing in electric vehicle repairs and maintenance, from bicycles to cars."
    }
  ];

  return (
    <StretchColumn>
      <h1 className="text-3xl lg:text-4xl">Merchants</h1>
      <span className="text-lg mb-4">Find participating merchants that accept Harmony credits.</span>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {merchants.map((merchant) => (
          <div className="bg-base-200 card p-2 md:p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{merchant.name}</h2>
            <p className="text-sm text-gray-500">{merchant.category}</p>
            {merchant.summary && <p className="mt-2">{merchant.summary}</p>}
          </div>
        ))}
      </div>
    </StretchColumn>
  );
}

type MerchantData = {
  name: string;
  category: string;
  summary?: string;
};