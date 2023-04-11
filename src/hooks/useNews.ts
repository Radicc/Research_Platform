import useData from "./useData.ts";

interface News {
  title: string;
  link: string;
  summary: string;
  id: number;
}

const useNews = () =>
  useData<News>("/list", {
    params: { category: "generalnews", region: "US" },
  });

export default useNews;
