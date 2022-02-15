import { useState } from "react";

const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timeLoading, setTimeLoading] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const setTrueIsLoading = () => setIsLoading(true);
  const setFalseIsLoading = () => setIsLoading(false);
  const setATimeLoading = (value) => setTimeLoading(value);
  const setASearchResult = (value) => setSearchResult(value);

  return {
    isLoading,
    setTrueIsLoading,
    setFalseIsLoading,
    searchResult,
    setASearchResult,
    timeLoading,
    setATimeLoading,
  };
};

export default useGetData;
