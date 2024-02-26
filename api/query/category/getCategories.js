import catchAsyncError from "@lib/catchAsyncError";
import Category from "@models/CategoryModel";
import connectToDB from "@utils/mongoose/connectToDB";

const getCategories = catchAsyncError(async () => {
  await connectToDB();

  const categories = await Category.find();

  return categories;
});

export default getCategories;
