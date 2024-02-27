import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="py-10 w-full grid grid-cols-3 justify-items-center gap-y-8 ">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
