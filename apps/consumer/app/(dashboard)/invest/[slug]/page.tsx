import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import { getInvestment } from "@/lib/investments";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = getInvestment(slug);

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  const { name, category, summary, fundingGoal, currentFunding, deadline } = project;

  return (
    <StretchColumn>
      <PageHeading
        title={name}
        backLink={{ href: "/invest", label: "Investments" }}
        subtitle={
          <div className="badge badge-outline badge-lg">{category}</div>
        }
      />
      <p className="text-lg lg:text-2xl">{summary}</p>
      <p>Funding Goal: {fundingGoal.toLocaleString()}</p>
      <p>Current Funding: {currentFunding.toLocaleString()}</p>
      <p>Deadline: {deadline}</p>
    </StretchColumn>
  );
}
