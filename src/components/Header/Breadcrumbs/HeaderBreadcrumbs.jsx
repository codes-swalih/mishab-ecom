import React from "react";
import Link from "next/link";

export default function HeaderBreadcrumbs({ heading, links }) {
  return (
    <nav className="flex flex-col gap-2 mb-4" aria-label="Breadcrumb">
      {heading && <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>}
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {links?.map((link, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {link.href ? (
              <Link href={link.href} className="hover:underline text-blue-600">
                {link.name}
              </Link>
            ) : (
              <span className="text-gray-700 font-semibold">{link.name}</span>
            )}
            {idx < links.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
