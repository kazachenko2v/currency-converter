import axios from "axios";
import { FORMAT_JSON, GET_CURRENCIES_LATEST_DATE } from "../constants/api";

export const getAllSettledData = async (from: string, to: string[]) => {
  const res = await Promise.allSettled(
    to.map((curr) =>
      axios.get(`${GET_CURRENCIES_LATEST_DATE}${from}/${curr}${FORMAT_JSON}`)
    )
  );

  return res.map((result) => {
    if (result.status == "fulfilled") {
      return result.value.data;
    }
    if (result.status == "rejected") {
      return result.reason;
    }
  });
};
