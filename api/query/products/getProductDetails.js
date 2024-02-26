import catchAsyncError from "@lib/catchAsyncError";
import Product from "@models/ProductModel";
import connectToDB from "@utils/mongoose/connectToDB";

const getProductDetails = catchAsyncError(async (id) => {
  await connectToDB();

  const productDetails = await Product.findOne({
    _id: id,
  });

  return productDetails;
});

export default getProductDetails;
