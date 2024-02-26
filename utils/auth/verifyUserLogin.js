import User from "@models/UserModel";
import connectToDB from "@utils/mongoose/connectToDB";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import verifyWebToken from "./verifyWebToken";
import catchAsyncError from "@lib/catchAsyncError";

const verifyUserLogin = catchAsyncError(async () => {
  const token = cookies().get("token");

  if (!token) {
    redirect("/login");
  }

  const decoded = verifyWebToken(token.value);

  await connectToDB();

  const findUser = await User.findOne({ _id: decoded.id });

  if (!findUser) {
    redirect("/login");
  }

  return findUser;
});

export default verifyUserLogin;
