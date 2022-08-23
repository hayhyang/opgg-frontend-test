import { useState, useEffect } from "react";

const usePageOn = () => {
  const [pageOn, setPageOn] = useState<boolean>(false);

  useEffect(() => {
    setPageOn(true);
  }, []);

  return { pageOn, setPageOn };
};

export default usePageOn;
