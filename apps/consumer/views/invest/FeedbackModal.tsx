"use client";
import { useState } from "react";

type FeedbackFormData = {
  message: string;
};

export const modalId = "feedback-modal";

export default function FeedbackModal({ onSubmit }: { onSubmit?: () => void }) {
  const [form, setForm] = useState<FeedbackFormData>({
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <dialog id={modalId} className="modal modal-bottom md:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg lg:text-2xl mb-4">Feedback</h3>
        <div className="mt-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Message</legend>
            <textarea
              className="textarea"
              required
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <p className="label">
              What would make you more likely to support this investment?
            </p>
          </fieldset>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-3">Cancel</button>
            <button className="btn btn-warning" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}