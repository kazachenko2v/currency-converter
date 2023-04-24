import React from "react";
import { currencyList } from "../types";
import { FORMAT_JSON, GET_CURRENCY_LATEST_DATE } from "../constants/api";

const useGetCurrencyList = () => {
  const [currencyList, setCurrencyList] = React.useState<currencyList | null>(
    null
  );

  const [value, setValue] = React.useState<number>(0);

  const forceUpdate = () => {
    setValue((v) => v + 1);
  };

  React.useEffect(() => {
    const getCurrencies = async () => {
      const data = await (
        await fetch(`${GET_CURRENCY_LATEST_DATE}/currencies${FORMAT_JSON}`)
      ).json();
      setCurrencyList(data);
    };
    getCurrencies();
    const interval = setInterval(getCurrencies, 60000);
    return () => clearInterval(interval);
  }, [value]);

  return [currencyList, forceUpdate] as const;
};

export default useGetCurrencyList;
