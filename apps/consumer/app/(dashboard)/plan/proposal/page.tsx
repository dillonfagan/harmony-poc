"use client";
import { FormEvent, useMemo, useState } from "react";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";

export default function Proposal() {
  const [items, setItems] = useState<ProposalItemData[]>([
    { name: "", quantity: 1 },
  ]);

  const lastItem = useMemo(() => {
    const length = items.length;
    return length ? items[length - 1] : undefined;
  }, [items]);

  const updateItem = (idx: number, newItem: ProposalItemData) => {
    setItems(items => items.map((item, i) => (i === idx ? newItem : item)));
  };

  const removeItem = (idx: number) => {
    setItems(items => items.filter((_, i) => i !== idx));
  };

  const addItem = () => {
    setItems(items => [...items, { name: "", quantity: 1, unit: "", justification: "" }]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Submit logic here
    alert("Proposal submitted! (not implemented)");
  };

  return (
    <StretchColumn>
      <PageHeading title="Consumption Proposal" subtitle="Add items to your proposal below." backLink={{ href: "/plan", label: "Plan" }} />
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        {items.map((item, idx) => (
          <ProposalItem
            key={idx}
            item={item}
            onChange={newItem => updateItem(idx, newItem)}
            onRemove={() => removeItem(idx)}
          />
        ))}
        <button type="button" className="btn btn-outline btn-primary w-fit" disabled={lastItem?.name === ""} onClick={addItem}>
          Add Item
        </button>
        <button type="submit" className="btn btn-success w-fit self-end mt-4">
          Submit Proposal
        </button>
      </form>
    </StretchColumn>
  );
}

type ProposalItemData = {
  name: string;
  quantity: number;
  unit?: string;
};

function ProposalItem({ item, onChange, onRemove }: {
  item: ProposalItemData;
  onChange: (item: ProposalItemData) => void;
  onRemove: () => void;
}) {
  // Example indicative price (in a real app, this would come from data)
  const indicativePrice = item.name ? `${(item.quantity * 12).toFixed(2)} Credits` : null;

  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="input md:flex-5/6 shrink-0"
            placeholder="Item name"
            value={item.name}
            onChange={e => onChange({ ...item, name: e.target.value })}
          />
          <input
            className="input shrink"
            type="number"
            min={1}
            placeholder="Qty"
            value={item.quantity}
            onChange={e => onChange({ ...item, quantity: Number(e.target.value) })}
          />
          <input
            className="input shrink"
            type="text"
            placeholder="Unit"
            value={item.unit}
            onChange={e => onChange({ ...item, unit: e.target.value })}
          />
          <button className="btn btn-error btn-outline" onClick={onRemove} type="button">Remove</button>
        </div>
        {indicativePrice && (
          <div className="alert alert-info mt-2 py-2 px-4 text-sm">
            Indicative price: <span className="font-bold">{indicativePrice}</span>
          </div>
        )}
      </div>
    </div>
  );
}