import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import Link from "next/link";

export default function Plan() {
  return (
    <StretchColumn>
      <PageHeading title="Plan" subtitle="Welcome to Phase 2" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card border border-base-300">
          <div className="card-body">
            <p>Harmony's Phase 2 is to grow into an economy based on participatory planning.</p>
            <p>The cooperative responsible for running this platform will gradually acquire property and assets to support production in democratically operated workplaces. These workplaces will be wholly owned by the cooperative.</p>
            <p>This new economy begins with consumption proposals. Consumers will submit their proposals for products and services they want to see developed, annually or quarterly.</p>
            <p>Proposed products and services will be posted publicly and producers will have the opportunity to submit production proposals.</p>
            <p>The cooperative will review the first round of consumption and production proposals and calculate indicative prices.</p>
            <p>Consumption proposals will be sent back to consumers for review, if producers were unable to satisfy the requested product or service, or if the total cost exceeds that consumer's budget.</p>
            <p>This process will repeat until a plan is approved.</p>
            <p>The cooperative then provides producer councils with vouchers to purchase the materials and equipment they need.</p>
            <p>In order to participate, 100% of your deposits must remain in the cooperative. Cash may not be withdrawn.</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Fall 2025 Plan</h2>
            <p>Submit your consumption proposal by <time dateTime="2025-09-30">September 30, 2025</time></p>
            <div className="card-actions">
              <Link href="/plan/proposal" className="btn btn-primary" role="button">Submit Proposal</Link>
            </div>
          </div>
        </div>
      </div>
    </StretchColumn>
  );
}