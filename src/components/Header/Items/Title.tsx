import Link from "next/link";
import React from "react";
import { CONFIG } from "../../../../site.config";

export default function Title() {
  return (
    <Link href={"/"}>
      <div>{CONFIG.blog.title}</div>
    </Link>
  );
}
