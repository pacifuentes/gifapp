import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGif = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGif(categoria).then((img) => {
      setstate({ data: img, loading: false });
    });
  }, [categoria]);

  return state;
};
