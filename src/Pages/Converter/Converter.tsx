import React from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";

import { CurrencyList } from "../../components";
import RefreshButton from "../../components/UI/RefreshButton";

import useGetCurrencyList from "../../hooks/useGetCurrencyList";
import useGetConverterData from "../../hooks/useGetConverterData";
import { setString } from "../../utils/setString";
import { DEFALUT_CURRENCY, DEFALUT_CURRENCY_TO_CONVERT } from "../../constants";
import { activeCurrencyListData } from "../../types";

import styles from "./Converter.module.css";

const Converter: React.FC = () => {
  const [currencyList, forceUpdate] = useGetCurrencyList();
  const [from, setFrom] =
    React.useState<keyof activeCurrencyListData>(DEFALUT_CURRENCY);
  const [to, setTo] = React.useState<keyof activeCurrencyListData>(
    DEFALUT_CURRENCY_TO_CONVERT
  );
  const [value, setValue] = React.useState<number>(1);
  const secondCurrencyData = useGetConverterData<
    activeCurrencyListData,
    keyof activeCurrencyListData
  >(from, to, setString);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convertedValue =
    secondCurrencyData && Number((value * secondCurrencyData[to]).toFixed(2));

  return (
    <main data-testid="converter-page">
      {currencyList === null || convertedValue === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <CurrencyList
            currentCurrency={from}
            currencyList={currencyList}
            setCurrent={setFrom}
          />
          <div className={styles.container}>
            <TextField
              type="number"
              defaultValue={value}
              onChange={(event) => setValue(Number(event.target.value))}
            />
            <div>
              <IconButton color="primary" component="label" onClick={swap}>
                <SwapVertIcon color="action" fontSize="large" />
              </IconButton>
            </div>
            <p className={styles.textfield}>
              {isNaN(convertedValue) ? "0" : convertedValue}
            </p>
          </div>
          <CurrencyList
            currentCurrency={to}
            currencyList={currencyList}
            setCurrent={setTo}
          />
          <RefreshButton forceUpdate={forceUpdate} />
        </>
      )}
    </main>
  );
};

export default Converter;
