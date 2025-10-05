"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  
  // Get query parameters
  const page = searchParams.get("page");      // string or null
  const category = searchParams.get("category"); // string or null

  console.log("Page:", page, "Category:", category);

  return (
    <div>
      <h1>Client Component Example</h1>
      <p>Page: {page || "Not specified"}</p>
      <p>Category: {category || "Not specified"}</p>
    </div>
  );
};

export default ProductList;
