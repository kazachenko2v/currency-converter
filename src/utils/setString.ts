import { FORMAT_JSON, GET_CURRENCIES_LATEST_DATE } from "../constants/api";
import { getData } from "./getData";

export const setString = async (from: string, to: string, set: any) => {
  const data = await getData(
    `${GET_CURRENCIES_LATEST_DATE}${from}/${to}${FORMAT_JSON}`
  );
  set(data);
};
