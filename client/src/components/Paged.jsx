import { useState } from "react";
import "./Paged.css";

function Paged({ recipesPage, allRecipes, paged }) {
  const pages = [];
  const [currentPage, setcurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPage); i++) {
    pages.push(i);
  }

  function clickHandler(p) {
    setcurrentPage(p);
    paged(p);
  }

  function prevPageHandler() {
    if (currentPage <= 1) return;
    let prevPage = currentPage - 1;
    setcurrentPage(prevPage);
    paged(prevPage);
  }

  function nextPageHandler() {
    if (currentPage >= pages.length) return;
    let nextPage = currentPage + 1;
    setcurrentPage(nextPage);
    paged(nextPage);
  }

  return (
    <nav className="containerPager">
      <ul className="pager">
        <li
          className="pager__item pager__item--prev"
          onClick={() => prevPageHandler()}
        >
          <a className="pager__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#f1f1f1"
                  d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        {pages?.map((p) => (
          <li className="pager__item" key={p} onClick={() => clickHandler(p)}>
            <a className="pager__link">{p}</a>
          </li>
        ))}

        <li className="pager__item pager__item--next">
          <a className="pager__link" onClick={() => nextPageHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#f1f1f1"
                  d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                ></path>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    // <div className={styles.pagination}>
    //   {pages?.map((p) => (
    //     <button key={p} className={styles.btn} onClick={() => paged(p)}>
    //       {p}
    //     </button>
    //   ))}
    // </div>

    // <div>
    //   {pages.length <= 1 ? (
    //     <></>
    //   ) : (
    //     <nav className="container">
    //       <ul className="page">
    //         {pages?.map((p) => (
    //           <li className="page__btn" key={p}>
    //             {p}
    //             <span
    //               className="page__numbers"
    //               onClick={() => paged(p)}
    //               style={{ width: "30px" }}
    //             >
    //               {p}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   )}
    // </div>
  );
}
export default Paged;
