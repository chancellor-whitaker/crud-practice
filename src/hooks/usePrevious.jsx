import { useState } from "react";

export function usePrevious(value, callback) {
  const [previousValue, setPreviousValue] = useState(value);

  const synchronize = () => setPreviousValue(value);

  const handleChange = () => {
    if (typeof callback === "function") callback(previousValue);
  };

  if (previousValue !== value) {
    synchronize();

    handleChange();
  }

  return previousValue;
}
