import Investment from "@/views/invest/Investment";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: Props) {
  const { slug } = await params;
  return <Investment id={slug} />;
}
