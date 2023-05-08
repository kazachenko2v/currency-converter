import React from "react";

import { GET_CURRENCY_LATEST_DATE_FORMAT_JSON } from "../constants/api";
import { getData } from "../utils/getData";

import { currencyList } from "../types";

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
      const data = await getData(GET_CURRENCY_LATEST_DATE_FORMAT_JSON);
      setCurrencyList(data);
    };
    getCurrencies();
    const interval = setInterval(getCurrencies, 60000);
    return () => clearInterval(interval);
  }, [value]);

  return [currencyList, forceUpdate] as const;
};

export default useGetCurrencyList;
