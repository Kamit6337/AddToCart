import Navbar from "@containers/Navbar";
import verifyUserLogin from "@utils/auth/verifyUserLogin";

const MainLayout = async ({ children }) => {
  await verifyUserLogin();

  return (
    <>
      <div className="h-20 w-full ">
        <Navbar />
      </div>
      <div className="w-full">{children}</div>
    </>
  );
};

export default MainLayout;
