import axios from "axios";
import { vi } from "vitest";

import { GET_CURRENCY_LATEST_DATE_FORMAT_JSON } from "../../constants/api";
import {
  DEFALUT_ACTIVE_CURRENCY_LIST,
  DEFALUT_CURRENCY,
} from "../../constants";
import { getData } from "../../utils/getData";
import { getAllSettledData } from "../../utils/getAllSettledData";

vi.mock("axios");

describe("Main test", () => {
  beforeEach(() => {
    (axios.get as jest.Mock).mockReset();
  });

  it("makes a GET request to fetch currencies", async () => {
    const currencyListMock = { usd: "usd", eur: "eur", byn: "byn" };

    (axios.get as jest.Mock).mockResolvedValue({
      data: currencyListMock,
    });

    const currencyList = await getData(GET_CURRENCY_LATEST_DATE_FORMAT_JSON);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(currencyList).toStrictEqual(currencyListMock);
  });

  it("makes a GET request to fetch active currencies", async () => {
    const activeCurrencyListMock = [
      { date: "str", usd: 1 },
      { date: "str", eur: 1 },
      { date: "str", byn: 1 },
    ];

    (axios.get as jest.Mock)
      .mockResolvedValueOnce({
        data: activeCurrencyListMock[0],
      })
      .mockResolvedValueOnce({
        data: activeCurrencyListMock[1],
      })
      .mockResolvedValueOnce({
        data: activeCurrencyListMock[2],
      });

    const activeCurrencyList = await getAllSettledData(
      DEFALUT_CURRENCY,
      DEFALUT_ACTIVE_CURRENCY_LIST
    );

    expect(axios.get).toHaveBeenCalledTimes(
      DEFALUT_ACTIVE_CURRENCY_LIST.length
    );
    expect(activeCurrencyList).toStrictEqual(activeCurrencyListMock);
  });
});
