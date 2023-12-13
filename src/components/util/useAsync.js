import { useState } from "react";

export const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  if (typeof callback !== "function") {
    throw new Error("useAsync: callback must be a function");
  }

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = asyncFunction();
      setData(response?.data);
      return response;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, data };
};
