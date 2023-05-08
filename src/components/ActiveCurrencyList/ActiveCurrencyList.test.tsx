import { describe, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import ActiveCurrencyList from "./ActiveCurrencyList";
import { activeCurrencyListData } from "../../types";
import { DEFALUT_ACTIVE_CURRENCY_LIST } from "../../constants";

const activeCurrencyData = DEFALUT_ACTIVE_CURRENCY_LIST.map((i) => {
  return { [i]: 1, date: "str" };
});

const activeCurrencyList = DEFALUT_ACTIVE_CURRENCY_LIST;

describe("ActiveCurrencyList", () => {
  it("don't show list when activeCurrencyList is empty", () => {
    render(
      <ActiveCurrencyList
        activeCurrencyData={[]}
        activeCurrencyList={[]}
        deleteItem={function (e: string): void {
          throw new Error("Function not implemented.");
        }}
        currencyList={{ asd: "asd" }}
      />
    );

    expect(screen.queryByText(/add any currency/i)).not.toBeNull();
  });

  it("show list when activeCurrencyList is not empty", () => {
    render(
      <ActiveCurrencyList
        activeCurrencyData={activeCurrencyData as activeCurrencyListData[]}
        activeCurrencyList={activeCurrencyList}
        deleteItem={function (e: string): void {
          throw new Error("Function not implemented.");
        }}
        currencyList={{ asd: "asd" }}
      />
    );
    expect(screen.queryByText(/add any currency/i)).toBeNull();
    expect(screen.getAllByTestId("active-currency")).toHaveLength(
      activeCurrencyList.length
    );
  });

  it("delete item", () => {
    const removeItem = vi.fn();

    render(
      <ActiveCurrencyList
        activeCurrencyData={activeCurrencyData as activeCurrencyListData[]}
        activeCurrencyList={activeCurrencyList}
        deleteItem={removeItem}
        currencyList={{ asd: "asd" }}
      />
    );
    expect(screen.getAllByTestId("icon-button")[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByTestId("icon-button")[0]);
    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(removeItem).toHaveBeenCalledWith(activeCurrencyList[0]);
  });
});
