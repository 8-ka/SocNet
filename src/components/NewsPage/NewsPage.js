import React from "react";
import './styles.css'

const NewsPage = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <h1>NewsPage</h1>
    </div>     
  );
}

export default NewsPage;