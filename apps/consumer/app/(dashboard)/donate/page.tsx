import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import PaymentForm from "@/views/PaymentForm";

export default function Donate() {
  return (
    <StretchColumn>
      <PageHeading title="Donate" subtitle="Support your local economy and the broader Harmony ecosystem." />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-base-200 card p-4 shadow-sm">
          <h2 className="text-2xl mb-4">ACH Payment</h2>
          <PaymentForm />
        </div>
      </div>
    </StretchColumn>
  );
}