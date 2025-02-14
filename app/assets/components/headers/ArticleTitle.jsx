/*Template generated by WebStorm on Saturday (7/22/23), 3:58 AM.
 * Author: kramstyles
 * Filename: ArticleTitle.jsx
 */

import PropTypes from "prop-types";
import "./style.css";

const ArticleTitle = ({ title, class_, light, width }) => {
  if (width !== undefined) width = `${width}%`;
  else width = "20%";

  return (
    <>
      {!light ? (
        <div className="text-uppercase my-1 poppins fw-bold article-title position-relative">
          <h2 className={`mx-3 pb-0 raleway fw-bold ${class_}`}>{title}</h2>
          <div className="border-bottom border-dark border-3 article-title-divider position-absolute w-100" />
          <div
            className="position-absolute border-bottom border-3 border-warning"
            style={{ width: width }}
          />
        </div>
      ) : (
        <div className="text-uppercase my-1 poppins fw-bold article-title position-relative">
          <h2 className={` pb-0 raleway fw-bold text-white ${class_}`}>
            {title}
          </h2>
          <div className="border-bottom border-3 article-title-divider position-absolute w-100" />
          <div
            className="position-absolute border-bottom border-3 border-danger"
            style={{ width: width }}
          />
        </div>
      )}
    </>
  );
};

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  class_: PropTypes.string,
  light: PropTypes.bool,
  width: PropTypes.number,
};

export default ArticleTitle;
