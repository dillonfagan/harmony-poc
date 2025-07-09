type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl lg:text-5xl">{title}</h1>
      {subtitle && <span className="block text-lg mt-4">{subtitle}</span>}
    </div>
  );
}