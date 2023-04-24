import axios from "axios";
import { FORMAT_JSON, GET_CURRENCY_LATEST_DATE } from "../constants/api";

export const getArray = async (from: string, to: string[], set: any) => {
  const res = await Promise.allSettled(
    to.map((curr) =>
      axios.get(
        `${GET_CURRENCY_LATEST_DATE}/currencies/${from}/${curr}${FORMAT_JSON}`
      )
    )
  );

  const data = res.map((result) => {
    if (result.status == "fulfilled") {
      return result.value.data;
    }
    if (result.status == "rejected") {
      return result.reason;
    }
  });

  set(data);
};
