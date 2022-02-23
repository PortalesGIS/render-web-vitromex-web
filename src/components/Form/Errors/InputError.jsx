import React from "react";

export const InputError = ({ text }) => {
  return (
    <div className="text-Feedback_Warning text-10px small:text-paragraph_movil">
      <p>{text}</p>
    </div>
  );
};
