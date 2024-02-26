import User from "@models/UserModel";
import verifyWebToken from "@utils/auth/verifyWebToken";
import connectToDB from "@utils/mongoose/connectToDB";
import Req from "@utils/server/Req";
import Res from "@utils/server/Res";
import { cookies, headers } from "next/headers";

export const GET = async (req) => {
  const header = headers().getSetCookie();
  console.log("headers", header);
  console.log("cookies", cookies().getAll());

  const { cookies: custom_cookies } = Req(req);

  const { token } = custom_cookies;

  console.log("token", token);

  if (!token) {
    return Res({ message: "Token is expired" }, { status: 404 });
  }

  try {
    const decoded = verifyWebToken(token);

    await connectToDB();

    const findUser = await User.findOne({ _id: decoded.id });

    if (!findUser) {
      return Res({ message: "Unauthorised Access" }, { status: 403 });
    }

    return Res({ message: "User is Logged In", data: findUser });
  } catch (error) {
    return Res({ message: error?.message }, { status: error.status || 404 });
  }
};
