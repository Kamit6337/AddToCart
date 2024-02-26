/* eslint-disable @next/next/no-img-element */
import getProductDetails from "@api/query/products/getProductDetails";
import ImagePart from "./imagePart";

export const generateMetadata = async ({ params: { id } }) => {
  const productDetails = await getProductDetails(id);

  return {
    title: productDetails.title,
    description: productDetails.description,
  };
};

const ProductPage = async ({ params: { id } }) => {
  const productDetails = await getProductDetails(id);

  const {
    _id,
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = productDetails;

  return (
    <section className="grid grid-cols-2 gap-5 py-16 px-6">
      <div className="">
        <ImagePart images={images} title={title} />
      </div>

      <div>
        <p>{title}</p>
        <p>{brand}</p>
        <p>{description}</p>
        <p>$ {price}</p>
        <p>{stock}</p>
      </div>
    </section>
  );
};

export default ProductPage;
