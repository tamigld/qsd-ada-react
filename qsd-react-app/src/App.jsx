import React, { useEffect, useState } from "react";
import { Navbar } from './components/navbar/Navbar'
import axios from "axios";

import "./styles/App.css"
import { Article } from "./components/Article/Article";
import { MutatingDots } from "react-loader-spinner";

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    async function loadNews() {
      const res = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
      const newsData = res.data;

      setNews(newsData);
    }

    loadNews();

  }, [])

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length == 0 ?
          <div style={{
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MutatingDots
              visible={true}
              height="100"
              width="100"
              color="#ff5d5d"
              secondaryColor="#ff5d5d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>

          :

          news.map((article) => {
            return (
              <Article
                title={article.title}
                thumbnail={article.imageUrl}
                provider={article.newsSite}
                description={article.summary}
                url={article.url}
              />
            )
          })
        }
      </section>
    </>
  );
}

export default App;
