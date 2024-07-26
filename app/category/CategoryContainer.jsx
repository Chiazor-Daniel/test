// CategoryContainer.jsx
"use client";

import React from "react";
import { Common } from "@/app/assets/components";

const CategoryContainer = ({ slug }) => {
  return (
    <div className="container-fluid">
      {slug && <Common name={slug} start={0} skip={12} columns={4} />}
    </div>
  );
};

export default CategoryContainer;
