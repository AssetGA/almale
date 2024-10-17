"use client";

import { products } from "@/app/api/api";
import ProductAbout from "@/app/components/ProductAbout";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  console.log("id", router.query);

  const product = products.find((elem) => {
    return elem.id === 1 ? elem : "";
  });
  return (
    <>
      <div className="xl:container xl:mx-auto">
        <ProductAbout product={product} />
      </div>
      ;
    </>
  );
}
