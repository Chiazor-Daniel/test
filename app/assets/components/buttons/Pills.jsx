/*Template generated by WebStorm on Friday (9/8/23), 3:25 AM.
 * Author: kramstyles
 * Filename: Pills.jsx
 */

import PropTypes from "prop-types";

const Pills = ({ icon, name, link, _class, number }) => {
  // Set up random number
  const subNumber = Math.ceil(Math.random() * 100) + number;
  return (
    <a
      className={`rounded btn d-flex align-items-center my-3 p-2 fw-bold raleway justify-content-between ${_class}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="d-flex align-items-center">
        <span className="me-2">{icon} </span>
        <span className="mt-1 text-capitalize"> {name}</span>
      </div>
      <p className="border-4 ps-2 border-start border-light m-0">{subNumber}</p>
    </a>
  );
};

Pills.propType = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  _class: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default Pills;
