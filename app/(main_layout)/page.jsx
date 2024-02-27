import getCategories from "@api/query/category/getCategories";
import getAllProducts from "@api/query/products/getAllProducts";
import ProductList from "@components/ProductList";

export default async function Home() {
  const promises = [getAllProducts(), getCategories()];

  const [allProducts, allCategories] = await Promise.all(promises);

  return (
    <main className="flex">
      <div className="w-64 border-r-2 ">
        <p className="sticky top-20">Filter Options</p>
      </div>
      <ProductList products={allProducts} />
    </main>
  );
}
