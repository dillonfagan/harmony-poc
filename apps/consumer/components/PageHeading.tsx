import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string | React.ReactNode;
  backLink?: BackLink;
  trailing?: React.ReactNode;
};

type BackLink = {
  href: string;
  label: string;
};

export default function PageHeading({
  title,
  subtitle,
  backLink,
  trailing,
}: Props) {
  const isSubtitleString = typeof subtitle === "string";
  return (
    <div className="mb-4">
      {backLink && (
        <Link
          href={backLink.href}
          className="btn btn-primary btn-soft flex items-center gap-2 mb-4 w-max"
          aria-label={`Back to ${backLink.label}`}
        >
          <ArrowLeftIcon className="size-6" />
          <span className="font-semibold">{backLink.label}</span>
        </Link>
      )}
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl lg:text-5xl">{title}</h1>
        {trailing}
      </div>
      {subtitle && (
        <span className="block text-lg mt-4">{subtitle}</span>
      )}
    </div>
  );
}
