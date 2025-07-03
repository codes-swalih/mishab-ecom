import React from "react";
import Link from "next/link";

export default function BreadcrumbProduct({ productName, category }) {
  return (
    <nav className="text-sm py-4 px-2 md:px-0" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-500">
        <li>
          <Link href="/" className="hover:text-black">Home</Link>
        </li>
        <li>/</li>
        {category?.slug && (
          <li>
            <Link href={`/products/${category.slug}`} className="hover:text-black">{category.name}</Link>
          </li>
        )}
        {category?.slug && <li>/</li>}
        <li className="text-black font-semibold">{productName}</li>
      </ol>
    </nav>
  );
}
