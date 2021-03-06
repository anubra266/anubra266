import { useState } from "react";

export const useForm = (initialValues: { [key: string]: string }): any => {
  const [data, setData] = useState(initialValues);
  const reset = () => setData(initialValues);
  const fields = Object.keys(initialValues).reduce((acc, nxt) => {
    const props = {
      value: data[nxt],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setData((d: any) => ({
          ...d,
          [e.target.name]: e.target.value,
        }));
      },
    };
    acc[nxt] = props;
    return acc;
  }, {});
  return { ...fields, reset, data };
};
