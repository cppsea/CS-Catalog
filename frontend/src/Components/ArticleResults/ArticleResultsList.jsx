import ArticleResult from "./ArticleResult/ArticleResult";

export default function ArticleResultsList({
  articles,
  bookmarkTogglerCreator,
}) {
  return (
    <div className="d-flex flex-column gap-3">
      {articles.map((article) => (
        <ArticleResult
          article={article}
          key={article.id}
          bookmarkToggler={bookmarkTogglerCreator(article.id)}
        />
      ))}
    </div>
  );
}
