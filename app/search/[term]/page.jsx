"use client"
import Layout from "../../layout/index";
import { Common } from '../../assets/components';

const Search = ({ params }) => {
  // Get search term
  let { term } = params;

  // Decode the term from URL parameters
  term = decodeURIComponent(term);

  // Remove non-alphanumeric characters and replace with spaces
  term = term.replace(/[^a-zA-Z0-9\s-]/g, '');

  // Replace hyphens with spaces for backward compatibility
  term = term.split("-").join(" ");

  return (
    <Layout>
      <div className="container-fluid">
        <Common name={term} start={0} skip={12} columns={4} extras={term} />
      </div>
    </Layout>
  );
};

export default Search;
