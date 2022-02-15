import axios from "axios";
import { search_API_URL } from "../constants/baseURL";

export default async function onGettingData(
  onMappingData,
  setTrueIsLoading,
  setFalseIsLoading,
  setASearchResult,
  phraseSearch,
  setATimeLoading
) {
  const startTime = performance.now();
  setTrueIsLoading();
  const mappingPhraseSearch = phraseSearch.replace(/ /g, "+");
  try {
    const response = await axios.get(search_API_URL + mappingPhraseSearch);
    onMappingData(response.data.docs, setASearchResult);
  } catch (error) {
    console.error(error);
  } finally {
    const endTime = performance.now();
    setATimeLoading(((endTime - startTime) * 0.001).toFixed(1));
    setFalseIsLoading();
  }
}
