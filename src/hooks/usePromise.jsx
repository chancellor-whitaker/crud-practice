import { useEffect, useState } from "react";

export function usePromise(promise) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (promise) {
      let ignore = false;

      promise.then((response) => !ignore && setState(response));

      return () => {
        ignore = true;
      };
    }
  }, [promise]);

  return state;
}
