import mockDb from "../services/mockDb.json";

export const getArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDb.articles);
    }, 1500);
  });
};
