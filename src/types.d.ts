export type currencyList = Record<string, string>;
export type activeCurrencyData<T> = { [P in keyof T]: number } & {
  date: string;
};
export type activeCurrencyListData = activeCurrencyData<currencyList>;

export interface CurrencyListProps {
  currentCurrency: string | undefined;
  currencyList: currencyList;
  setCurrent: (curr: string) => void;
}

export interface ActiveCurrencyListProps {
  activeCurrencyData: activeCurrencyListData[];
  activeCurrencyList: string[];
  deleteItem: (e: string) => void;
  currencyList: currencyList;
}
