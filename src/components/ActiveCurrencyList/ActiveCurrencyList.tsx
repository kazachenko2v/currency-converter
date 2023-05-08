import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { ActiveCurrencyListProps } from "../../types";

import styles from "./ActiveCurrencyList.module.css";

const ActiveCurrencyList: React.FC<ActiveCurrencyListProps> = ({
  activeCurrencyData,
  activeCurrencyList,
  deleteItem,
  currencyList,
}) => {
  const dataArr = activeCurrencyData.map((obj) => Object.entries(obj));
  const fullNameCurrensyArr = dataArr.map((el) => currencyList[el[1][0]]);
  const currencyValueArr = dataArr.map((el) => el[1][1]);

  return (
    <div className={styles.container}>
      {!activeCurrencyList.length ? (
        <div>Add any currency</div>
      ) : (
        <>
          {activeCurrencyData?.map((obj, n) => (
            <div className={styles.item} key={n} data-testid="active-currency">
              <span className={styles.name}>
                {fullNameCurrensyArr[n]}, {activeCurrencyList[n]}:{" "}
              </span>
              <span>{Number(currencyValueArr![n]).toFixed(2)}</span>
              <IconButton
                data-testid="icon-button"
                color="primary"
                component="label"
                onClick={() => deleteItem(activeCurrencyList[n])}
              >
                <CloseIcon color="action" />
              </IconButton>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ActiveCurrencyList;
