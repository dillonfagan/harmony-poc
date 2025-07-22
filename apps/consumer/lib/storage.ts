"use client";
import { useEffect, useState } from "react";

type BaseData<T> = {
  items: T[];
};

type Base<T> = BaseData<T> & {
  update: (next: BaseData<T>) => void;
};

export type BaseKey = "accounts" | "investments";

export const useBase = <T>({ key, defaultValue }: { key: BaseKey, defaultValue?: BaseData<T> }): Base<T> => {
  const [data, setData] = useState<BaseData<T>>(defaultValue ?? { items: [] });

  useEffect(() => {
    if (typeof window !== "undefined") {
      let stored = localStorage.getItem(key);
      if (!stored) {
        const initialValue = defaultValue ?? { items: [] };
        stored = JSON.stringify(initialValue);
        localStorage.setItem(key, stored);
      }
      setData(JSON.parse(stored));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return {
    ...data,
    update: (next: BaseData<T>) => {
      localStorage.setItem(key, JSON.stringify(next));
    }
  };
};