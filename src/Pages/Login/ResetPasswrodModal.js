import React from "react";
import { useState } from "react";

const ResetPasswrodModal = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log(email);
    if (email) {
      setTimeout(() => window.location.reload(), 2000);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="reset-password-modal"
        className="modal-toggle"
      />
      <div id="modalDiv" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="reset-password-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-sm text-secondary">
            Type your email to get a link to rest your password.
          </h3>
          <form
            action="#"
            onSubmit={handleReset}
            className="grid grid-cols-1 gap-4 mt-5 justify-items-center"
          >
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="modal-action">
              <input
                htmlFor="reset-password-modal"
                type="submit"
                value="Reset"
                className="btn btn-sm text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswrodModal;
