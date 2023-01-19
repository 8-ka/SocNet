import React, { useState } from "react";
import './styles.css';

const Paginator = (props) => {
  const { totalCount, pageSize, onClickCurrentPage, portionSize = 20 } = props;

  const totalPages = Math.ceil(totalCount / pageSize);
  const portionCount = Math.ceil(totalPages / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <button disabled={portionNumber <= 1} onClick={() => { setPortionNumber(portionNumber - 1) }}>{"<"}</button>
      {pages
        .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
        .map((page, index) =>
          <span className="number_button" key={index.toString()} onClick={() => onClickCurrentPage(page)}>{page}</span>
        )}
      <button disabled={portionCount <= portionNumber} onClick={() => { setPortionNumber(portionNumber + 1) }}>{">"}</button>
    </div>
  );
}

export default Paginator;