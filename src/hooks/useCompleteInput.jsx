import { useEffect, useState } from "react";

export const useCompleteInput = (formValues) => {
  const [inputComplete, setInputComplete] = useState(false);
  let valuesInput = [];
  useEffect(() => {
    for (const value in formValues) {
      if (Object.hasOwnProperty.call(formValues, value)) {
        const element = formValues[value];
        valuesInput.push(element);
      }
    }
    const isComplete = valuesInput.every((value) => value !== "");
    setInputComplete(isComplete);
    // eslint-disable-next-line
  }, [formValues]);

  return [inputComplete];
};
