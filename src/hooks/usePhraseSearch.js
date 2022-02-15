import { useState } from "react";

const usePhraseSearch = () => {
  const [phraseSearch, setPhraseSearch] = useState("Find Your Book Here");

  const setAPhraseSearch = (value) => setPhraseSearch(value);
  const clearAPhraseSearch = () => {
    if (phraseSearch === "Find Your Book Here") setPhraseSearch("");
  };

  return {
    phraseSearch,
    setAPhraseSearch,
    clearAPhraseSearch,
  };
};

export default usePhraseSearch;
