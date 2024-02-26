import catchAsyncError from "@lib/catchAsyncError";
import Product from "@models/ProductModel";
import connectToDB from "@utils/mongoose/connectToDB";

const getAllProducts = catchAsyncError(async () => {
  await connectToDB();

  const allProducts = await Product.find({}).populate({
    path: "category",
    model: "Category",
  });

  return allProducts;
});

export default getAllProducts;
