import useData from "./useData.ts";

interface News {
  title: string;
  link: string;
  summary: string;
  uuid: number;
}

const useNews = () => useData<News>("/list");

export default useNews;
