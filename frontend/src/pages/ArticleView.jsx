import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "../Components/Article/Article.jsx";

export default function ArticleView() {
  const [article, setArticle] = useState();
  const { name = "" } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/api/articles/?name=${name}`)
      .then((res) =>
        res.json().then((data) => {
          let article = data[0];
          setArticle(article);
        })
      )
      .catch((error) => {
        console.error("error fetching data");
      });
  }, [name]);

  console.log("ID: ", name);
  return (
    <>
      {/*conditional rendering based on data being fetched*/}
      {article && <Article article={article} />}
    </>
  );
}