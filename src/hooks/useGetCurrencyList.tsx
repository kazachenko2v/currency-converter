import React from "react";
import { currencyList } from "../types";
import { FORMAT_JSON, GET_CURRENCY_LATEST_DATE } from "../constants/api";

const useGetCurrencyList = () => {
  const [currencyList, setCurrencyList] = React.useState<currencyList | null>(
    null
  );

  React.useEffect(() => {
    const getCurrencies = async () => {
      const data = await (
        await fetch(`${GET_CURRENCY_LATEST_DATE}/currencies${FORMAT_JSON}`)
      ).json();
      setCurrencyList(data);
    };

    getCurrencies();
  }, []);

  return currencyList;
};

export default useGetCurrencyList;
