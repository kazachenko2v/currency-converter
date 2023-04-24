import React from "react";

import { ActiveCurrencyList, CurrencyList, Header } from "../../components";

import useGetCurrencyList from "../../hooks/useGetCurrencyList";
import useGetConverterData from "../../hooks/useGetConverterData";
import { getArray } from "../../utils/getArray";
import {
  DEFALUT_ACTIVE_CURRENCY_LIST,
  DEFALUT_CURRENCY,
} from "../../constants";
import { activeCurrencyListData } from "../../types";

const Main: React.FC = () => {
  const currencyList = useGetCurrencyList();
  const [currentCurrency, setCurrentCurrency] =
    React.useState<string>(DEFALUT_CURRENCY);
  const [activeCurrencyList, setActiveCurrencyList] = React.useState<string[]>(
    DEFALUT_ACTIVE_CURRENCY_LIST
  );

  const activeCurrencyData = useGetConverterData<
    activeCurrencyListData[],
    string[]
  >(currentCurrency, activeCurrencyList, getArray);

  const setCurrentCurrencyHandler = (curr: string) => {
    setCurrentCurrency(curr);
  };

  const setActiveCurrencyListHandler = (curr: string) => {
    const contain = activeCurrencyList.includes(curr);
    if (contain) {
      setActiveCurrencyList(activeCurrencyList.filter((el) => el !== curr));
    } else {
      setActiveCurrencyList([...activeCurrencyList, curr]);
    }
  };

  const deleteItem = (e: string) => {
    setActiveCurrencyList(activeCurrencyList.filter((el) => el !== e));
  };

  return (
    <>
      {currencyList === null || activeCurrencyData === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <CurrencyList
            currentCurrency={currentCurrency}
            currencyList={currencyList}
            setCurrent={setCurrentCurrencyHandler}
          />

          <ActiveCurrencyList
            activeCurrencyData={activeCurrencyData}
            deleteItem={deleteItem}
            activeCurrencyList={activeCurrencyList}
            currencyList={currencyList}
          />
          <CurrencyList
            currentCurrency={undefined}
            currencyList={currencyList}
            setCurrent={setActiveCurrencyListHandler}
          />
        </>
      )}
    </>
  );
};

export default Main;
