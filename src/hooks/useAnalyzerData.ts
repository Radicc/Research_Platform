import { useState, useEffect } from "react";
import apiClient from "../services/api-client-analyzer.ts";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface RootObject<T> {
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      setError("");
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          if (!res.data) {
            setLoading(false);
            setData([]);
            return;
          }
          setData([res.data]);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
