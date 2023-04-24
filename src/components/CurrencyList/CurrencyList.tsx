import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

import { CurrencyListProps } from "../../types";

const CurrencyList: React.FC<CurrencyListProps> = ({
  currentCurrency,
  currencyList,
  setCurrent,
}) => {
  const currencyListArr = Object.entries(currencyList).filter((arr) => {
    if (arr[1] !== "") {
      return arr;
    }
  });
  const fullCurr = currentCurrency && currencyList[currentCurrency];

  return (
    <Autocomplete
      value={fullCurr ? [currentCurrency, fullCurr] : undefined}
      disableClearable={true}
      options={currencyListArr}
      onChange={(e: any, newValue: [string, string] | null) => {
        if (newValue) {
          setCurrent(newValue[0]);
        }
      }}
      isOptionEqualToValue={(
        option: [string, string],
        value: [string, string]
      ) => {
        if (option[0] === value[0]) {
          return true;
        } else {
          return false;
        }
      }}
      getOptionLabel={(option) => `${option[1]}, ${option[0]}`}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {`${option[1]}, ${option[0]}`}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a currency"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default CurrencyList;
