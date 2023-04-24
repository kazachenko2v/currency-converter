import axios from "axios";
import { FORMAT_JSON, GET_CURRENCY_LATEST_DATE } from "../constants/api";

export const getString = async <T,>(from: string, to: string, set: any) => {
  const res = await axios.get(
    `${GET_CURRENCY_LATEST_DATE}/currencies/${from}/${to}${FORMAT_JSON}`
  );
  set(res.data);
};
