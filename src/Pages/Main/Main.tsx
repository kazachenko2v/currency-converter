import React from "react";

import { ActiveCurrencyList, CurrencyList } from "../../components";
import RefreshButton from "../../components/UI/RefreshButton";

import useGetCurrencyList from "../../hooks/useGetCurrencyList";
import useGetConverterData from "../../hooks/useGetConverterData";
import { setArray } from "../../utils/setArray";
import {
  DEFALUT_ACTIVE_CURRENCY_LIST,
  DEFALUT_CURRENCY,
} from "../../constants";
import { activeCurrencyListData } from "../../types";

const Main: React.FC = () => {
  const [currencyList, forceUpdate] = useGetCurrencyList();
  const [currentCurrency, setCurrentCurrency] =
    React.useState<string>(DEFALUT_CURRENCY);
  const [activeCurrencyList, setActiveCurrencyList] = React.useState<string[]>(
    DEFALUT_ACTIVE_CURRENCY_LIST
  );

  const activeCurrencyData = useGetConverterData<
    activeCurrencyListData[],
    string[]
  >(currentCurrency, activeCurrencyList, setArray);

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
    <main data-testid="main-page">
      {currencyList === null || activeCurrencyData === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <CurrencyList
            currentCurrency={currentCurrency}
            currencyList={currencyList}
            setCurrent={setCurrentCurrencyHandler}
          />

          <ActiveCurrencyList
            activeCurrencyData={activeCurrencyData}
            activeCurrencyList={activeCurrencyList}
            deleteItem={deleteItem}
            currencyList={currencyList}
          />
          <CurrencyList
            currentCurrency={undefined}
            currencyList={currencyList}
            setCurrent={setActiveCurrencyListHandler}
          />
          <RefreshButton forceUpdate={forceUpdate} />
        </>
      )}
    </main>
  );
};

export default Main;
