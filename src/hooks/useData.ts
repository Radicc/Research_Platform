import { useState, useEffect } from "react";
import apiClient from "../services/api-client.ts";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Game<T> {
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        if (res.data.status === 0) {
          setLoading(false);
          setData([]);
          return;
        }

        setData(res.data.items.result);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
