import { useState } from "react";

const useGetData = () => {
  const [apiErrorStatus, setApiErrorStatus] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLoading, setTimeLoading] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const setAnApiErrorStatus = (value) => setApiErrorStatus(value);
  const setAnApiErrorMessage = (value) => setApiErrorMessage(value);
  const setTrueIsLoading = () => setIsLoading(true);
  const setFalseIsLoading = () => setIsLoading(false);
  const setATimeLoading = (value) => setTimeLoading(value);
  const setASearchResult = (value) => setSearchResult(value);

  return {
    apiErrorStatus,
    setAnApiErrorStatus,
    apiErrorMessage,
    setAnApiErrorMessage,
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
