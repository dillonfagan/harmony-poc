import { useBase } from "./storage";

type AccountData = {
  consumptionCredits: number;
  investmentCredits: number;
};

const defaultAccount: AccountData = {
  consumptionCredits: 1234,
  investmentCredits: 2400,
};

export const useAccount = () => {
  const base = useBase<AccountData>({ key: "accounts", defaultValue: { items: [defaultAccount] } });
  const account = base.items[0];

  return {
    ...account,
    update: (data: Partial<AccountData>) => {
      base.update({ items: [ { ...account, ...data } ] });
    }
  };
};