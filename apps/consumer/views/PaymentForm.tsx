"use client";

import { useState } from "react";

export default function PaymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    accountType: "checking",
    routingNumber: "",
    accountNumber: "",
    amount: "",
    investmentCredits: 3,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would call your backend to process the ACH payment
    setSubmitted(true);
  }
  return submitted ? (
    <div className="alert alert-success">Thank you for your donation!</div>
  ) : (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="fieldset bg-base-100 border border-base-300 p-3 rounded-box">
        <legend className="fieldset-legend">Account Information</legend>
        <label className="label">Account Type</label>
        <select
          className="select"
          name="accountType"
          value={form.accountType}
          onChange={handleChange}
        >
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
        </select>

        <label className="label">Routing Number</label>
        <input type="text" className="input" placeholder="9 digits" name="routingNumber"
          value={form.routingNumber}
          onChange={handleChange}
          required
          pattern="\d{9}"
          maxLength={9}
          inputMode="numeric"
        />

        <label className="label">Account Number</label>
        <input
          className="input"
          name="accountNumber"
          value={form.accountNumber}
          onChange={handleChange}
          required
          minLength={4}
          maxLength={17}
          inputMode="numeric"
          placeholder="4-17 digits"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-100 border border-base-300 p-3 rounded-box">
        <legend className="fieldset-legend">Donation</legend>
        <label className="label">Amount (USD)</label>
        <input
          className="input"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
          type="number"
          min="1"
          step="0.01"
          placeholder="Amount"
        />
        <label className="label">% Investment Credits</label>
        <input
          className="input"
          name="investmentCredits"
          value={form.investmentCredits}
          onChange={handleChange}
          required
          type="number"
          min="3"
          max="100"
          step="1"
          placeholder="%"
        />
      </fieldset>
      <button className="btn btn-primary mt-2" type="submit">
        Donate
      </button>
    </form>
  );
}