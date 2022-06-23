import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";
import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articlesList, setArticlesList] = useState(articles);


  // this contant initialize a list and calls the contant articlesList and compare 
  //    two executive dates then sorting them and putting the result in the list newArticles
  const sortByUpvotes = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  // this contant initialize a list and calls the contant articlesList and compare the two executive dates then sorting them
  // and putting the result in the list newArticles
  const sortByDates = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  return (
    <div className="App"> 
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        {/* call contant "sortByUpvotes" in button Most Upvoted */}
        <button className="small"    onClick={() => sortByUpvotes()}>Most Upvoted</button> 
        {/* call contant "sortByDates" in button Most Recent */}

        <button className="small"  onClick={() => sortByDates()}>Most Recent</button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;
