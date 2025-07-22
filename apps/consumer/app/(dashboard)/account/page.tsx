"use client";
import { StretchColumn } from "@/components/layouts";
import PageHeading from "@/components/PageHeading";
import { useAccount } from "@/lib/account";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Account() {
  const { consumptionCredits, investmentCredits } = useAccount();
  // Example user data (replace with real data as needed)
  const user = {
    name: "Alice Example",
    email: "alice@example.com",
    investmentCredits,
    consumptionCredits,
    joined: "2024-03-15",
  };

  return (
    <StretchColumn>
      <PageHeading
        title="Account"
        subtitle="Manage your profile and view your Harmony credits."
        trailing={<UserCircleIcon className="size-10 text-primary" />}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ProfileCard name={user.name} email={user.email} joined={user.joined} />
        <CreditsCard consumptionCredits={user.consumptionCredits} investmentCredits={user.investmentCredits} />
        <SettingsCard />
      </div>
    </StretchColumn>
  );
}

function ProfileCard({ name, email, joined }: { name: string; email: string, joined: string }) {
  return (
    <div className="card bg-base-200 shadow-sm card-body flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Profile</h2>
      <div className="flex items-center gap-4 mt-2">
        <UserCircleIcon className="size-16 text-primary" />
        <div>
          <div className="font-bold text-xl">{name}</div>
          <div className="text-sm text-gray-500">{email}</div>
          <div className="text-xs text-gray-400 mt-1">Joined {new Date(joined).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</div>
        </div>
      </div>
      <button className="btn btn-outline btn-primary mt-4 self-start">Edit Profile</button>
    </div>
  );
}

function CreditsCard({ consumptionCredits, investmentCredits }: { consumptionCredits: number; investmentCredits: number }) {
  return (
    <div className="card bg-base-200 shadow-sm card-body flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Credits</h2>
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex flex-col items-start">
          <span className="text-5xl font-extrabold text-primary leading-tight">{consumptionCredits.toLocaleString()}</span>
          <span className="text-base text-gray-500 mt-1">Consumption Credits</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-5xl font-extrabold text-secondary leading-tight">{investmentCredits.toLocaleString()}</span>
          <span className="text-base text-gray-500 mt-1">Investment Credits</span>
        </div>
      </div>
    </div>
  );
}

function SettingsCard() {
  return (
    <div className="card bg-base-200 shadow-sm card-body flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Settings</h2>
      <div className="flex flex-col justify-end grow gap-2 mt-2">
        <button className="btn btn-outline btn-secondary">Change Password</button>
        <button className="btn btn-outline btn-error">Sign Out</button>
      </div>
    </div>
  );
}