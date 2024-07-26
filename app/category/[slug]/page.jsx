"use client"
import Layout from "../../layout/index";
import { Common } from '../../assets/components';
import { categories } from "../category";

export default function Category({ params }) {
  const { slug } = params;

  return (
    <Layout>
      <div className="container-fluid">
        {slug && <Common name={slug} start={0} skip={12} columns={4} />}
      </div>
    </Layout>
  );
}
