import getCategories from "@api/query/category/getCategories";
import getAllProducts from "@api/query/products/getAllProducts";
import ProductCart from "@components/ProductCart";

export default async function Home() {
  const promises = [getAllProducts(), getCategories()];

  const [allProducts, allCategories] = await Promise.all(promises);

  return (
    <main className="flex">
      <div className="w-64 border-r-2 ">
        <p className="sticky top-0">Filter Options</p>
      </div>
      <div className="py-10 w-full grid grid-cols-3 justify-items-center gap-y-8 ">
        {allProducts.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}
