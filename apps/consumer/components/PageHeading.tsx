type Props = {
  title: string;
  subtitle?: string;
  trailing?: React.ReactNode;
};

export default function PageHeading({ title, subtitle, trailing }: Props) {
  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between"><h1 className="text-4xl lg:text-5xl">{title}</h1>{trailing}</div>
      {subtitle && <span className="block text-lg mt-4">{subtitle}</span>}
    </div>
  );
}