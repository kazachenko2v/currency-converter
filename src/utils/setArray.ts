import { getAllSettledData } from "./getAllSettledData";

export const setArray = async (from: string, to: string[], set: any) => {
  const data = await getAllSettledData(from, to);

  set(data);
};
