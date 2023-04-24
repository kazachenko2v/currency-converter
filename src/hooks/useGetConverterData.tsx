import React from "react";

const useGetConverterData = <T, K>(
  from: string,
  to: K,
  cb: (
    from: string,
    to: K,
    set: React.Dispatch<React.SetStateAction<T | null>>
  ) => void
) => {
  const [data, setData] = React.useState<T | null>(null);

  React.useEffect(() => {
    cb(from, to, setData);
  }, [from, to]);

  return data;
};

export default useGetConverterData;
