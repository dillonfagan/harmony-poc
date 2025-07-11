"use client";

import Link from "next/dist/client/link";
import { useCallback, useState } from "react";

type Props = {
  hideOnActivate?: boolean;
};

export default function ActivationCard({ hideOnActivate }: Props) {
  const [activated, setActivated] = useState(false);

  const activate = useCallback(() => {
    setActivated(true);
  }, [setActivated]);

  const openModal = () => {
    (document.getElementById("card-activation-modal") as HTMLDialogElement | null)?.showModal();
  };

  if (hideOnActivate && activated) {
    return null;
  }

  if (activated) {
    return <MarketCard />;
  }

  return (
    <div className="flex flex-col bg-base-200 card p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Harmony Card</h2>
      <span className="grow mb-4">It looks like you still haven't activated your Harmony Card. Use it to redeem your consumption credits at participating merchants.</span>
      <button className="btn btn-primary" onClick={openModal}>Activate Card</button>
      <dialog id="card-activation-modal" className="modal modal-bottom md:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Activate Harmony Card</h3>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Card Number</legend>
              <input type="text" className="input" placeholder="0000-0000-0000-0000" />
            </fieldset>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mr-3">Cancel</button>
              <button className="btn btn-primary" onClick={activate}>Activate</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

function MarketCard() {
  return (
    <div className="flex flex-col bg-base-200 card p-4 shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">Market</h2>
      <span className="grow mb-4">Start browing merchants that accept consumption credits.</span>
      <Link href="/market" className="btn btn-primary" role="button">Browse Merchants</Link>
    </div>
  );
}