"use client"
import Link from 'next/link';
import Layout from "../layout/index"

const ErrorPage = () => (
  <Layout>
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="text-white bg-danger rounded-circle error">
            <span className="m-auto">404</span>
          </h1>
        </div>
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold-5 mt-3">Page Not Found</h1>
          <p>
            OOPS! The page you are looking for does not exist. <br />
            Please use the search for help, or visit the home page.
          </p>
          <Link href="/">
            <p className="btn btn-dark">Back to Homepage!</p>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default ErrorPage;
